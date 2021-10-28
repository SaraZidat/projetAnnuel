import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {createWorker, RecognizeResult} from 'tesseract.js';


@Component({
  selector: 'fbapp-register-bis',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit,FbappPage,AfterViewInit {

  public pageTitle = 'Créer un compte';
  @ViewChild('register', { static: false }) registerInput: ElementRef;

  /******************* */
  @ViewChild('fileSelector', { static: false }) fileInput: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('canvasContainer', { static: false }) canvasContainer: ElementRef;
  private ctx: CanvasRenderingContext2D;
  private selectedFile: File;
  private image: any;
  private ratio: number;
  result: any;
  words: any[];
  symbols: any[];
  selectedLine = null;
  selectedWord = null;
  selectedSymbol = null;
  elementColumns: Observable<string[]>
  progressStatus: string;
  progress: number;
  language = 'fra';
  /*************** */
  FormRegister: FormGroup;
  public firstName$!: Observable<string>;

  constructor(private readonly userService: UserService,private readonly router: Router,private readonly http: HttpClient,private readonly changeDetectionRef: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
  ngOnInit() : void {
    this.FormRegister = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'pseudo': new FormControl('',[
        Validators.required,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      'age': new FormControl('',[
      ]),


    }); // <-- add custom validator at the FormGroup level
  }
  get email() { return this.FormRegister.get('email'); }
  get pseudo() { return this.FormRegister.get('pseudo'); }
  get password() { return this.FormRegister.get('password'); }
  get age() { return this.FormRegister.get('age'); }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }
  public goToFormPartenaire(): void {
    this.router.navigateByUrl('/partners');
  }


    public onSubmit(formDir): void {
      //formDir.age.value=26;
    const textCNI=this.elementColumns['text'];
    const formRes = formDir.value;
    var birthDay=/Mételle:/gi;
    const d=textCNI.indexOf(birthDay);
    console.log(textCNI);
    const date=textCNI.substr(d+9,10);
    birthDay= (date.replace(/[.]/g,'-')).reverse();
    const value ={
      email: formRes.email,
      password: formRes.password,
      pseudo: formRes.pseudo,
      createDate: new Date().toISOString()
      .split("T")[0],
      age: birthDay
    };
    //this.doOCR(formRes.age);
    console.log(formRes);
    console.log(value);

    //this.userService.create(valuet);
    this.goToHome();
    }

  clickFileSelector() {
    this.fileInput.nativeElement.click();
  }
  async onFileChange(event) {
    this.selectedFile = event.target.files[0];

    this.progressStatus = '';
    this.progress = null;

    this.result = null;
    this.words = null;
    this.symbols = null;
    this.selectedLine = null;
    this.selectedWord = null;
    this.selectedSymbol = null;

    this.image = new Image();
    this.image.onload = () => this.drawImageScaled(this.image);
    this.image.src = URL.createObjectURL(this.selectedFile);


    const worker = createWorker({
      logger: progress => {
        this.progressStatus = progress.status;
        this.progress = progress.progress;
        //this.progressBar.set(progress.progress * 100);
        this.changeDetectionRef.markForCheck();
      }
    });
    await worker.load();
    await worker.loadLanguage(this.language);
    await worker.initialize(this.language);


    try {
      const result = await worker.recognize(this.selectedFile);
      if (result) {
        this.result = (result as RecognizeResult).data;
        this.elementColumns["text"]=result.data.text['text'];
        this.elementColumns["confidence"]=result.data.confidence;

        console.log(result.data.text);
      }
      await worker.terminate();
    } catch (e) {
      console.log(e);
      this.progressStatus = e;
      this.progress = null;
    } finally {
      this.progressStatus = null;
      this.progress = null;
    }

    // reset file input
    event.target.value = null;
  }
  private drawImageScaled(img) {
    const width = this.canvasContainer.nativeElement.clientWidth;
    const height = this.canvasContainer.nativeElement.clientHeight;

    const hRatio = width / img.width;
    const vRatio = height / img.height;
    this.ratio = Math.min(hRatio, vRatio);
    if (this.ratio > 1) {
      this.ratio = 1;
    }

    this.canvas.nativeElement.width = img.width * this.ratio;
    this.canvas.nativeElement.height = img.height * this.ratio;

    this.ctx.clearRect(0, 0, width, height);
    this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width * this.ratio, img.height * this.ratio);
    var imageData=this.ctx.getImageData(0, 0, img.width, img.height);
    var data = imageData.data;
    this.nuancegris(data);
    /**Function qui nuance en gris */
      this.ctx.putImageData(imageData, 0, 0);

  }
  private nuancegris(data){
    for (var i = 0; i < data.length; i += 4) {
      var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = moy; // rouge
      data[i + 1] = moy; // vert
      data[i + 2] = moy; // bleu
    }
  }

}
