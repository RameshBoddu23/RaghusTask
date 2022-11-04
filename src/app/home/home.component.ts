import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emaildata: any;
  filterTerm!: string;
  file: any;
  constructor(private emailservice: EmailService, private fileSaver: FileSaverService, private http:HttpClient) { }
  
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.emailservice.getAll("data").subscribe((data) => {
      console.log(data)
      this.emaildata = data;
    })
  }

  // openFile(event: any): void {
  //   const input = event.target;
  //   const reader = new FileReader();
  //   reader.onload = (() => {
  //     if (reader.result) {
  //       this.context = JSON.parse(reader.result.toString())
  //       console.log(JSON.parse(reader.result.toString()));
  //     }
  //   });
  //   reader.readAsText(input.files[0], 'utf-8');
  //   }

  openFile(event:any){
    this.file=event.target.files[0];
  }

  onUpload()
  {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin','*')
    if(this.file)
    {
      let formdata=new FormData();
      formdata.append('file',this.file);
      return this.http.post('https://745a-115-117-172-107.in.ngrok.io/app/uploadFile',formdata, {headers}).subscribe((event:any)=>{
        console.log(event)
      });
    }
  return false;
  }

  excelExport() {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const workSheet = XLSX.utils.json_to_sheet(this.emaildata);
    const workBook = {
      Sheets: { 'testSheets': workSheet },
      SheetNames: ['testSheets']
    }
        const excelBuffer = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' });
const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
    this.fileSaver.save(blobData, "demoFile");
  } 

 
  onTableDataChange(event: any) {
    this.page = event;
   this.get();
  }

 
 
}
