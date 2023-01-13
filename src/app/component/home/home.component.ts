import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { interval } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  Emi: number | undefined;
  PrincipalInterest: any;
  InterestPayable: any;
  quantityInc:number=500;
  Amount: any;

  emiCal:boolean=true;
  PmayCal:boolean=false;

  sendOTP:boolean=true;

  GettingNewOffers!:FormGroup

  OtpGenerated!: number;
  isVerifyOtp: boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.calculateEmi()
    this.GettingOffersForm();
  }

  GettingOffersForm(){
    this.GettingNewOffers = this.fb.group({
      'firstName':['',[Validators.required]],
      'lastName':['',[Validators.required]],
      'mobileNo':['',[Validators.required]],
      'Otp':['',[Validators.required]]
    })
  }

  SubmitDetails(){
    if(this.isVerifyOtp){
      console.log(this.GettingNewOffers.value);
    }    
  }

  getOtp(){ 
    this.sendOTP = false; 
    //generate 4 digit random otp
    this.OtpGenerated = Math.floor(1000 + Math.random() * 9000);
    console.log(this.OtpGenerated); 
  }

  verifyOtp(OtpEntered:any){
    if(OtpEntered ==this.OtpGenerated){
      this.isVerifyOtp = true;
      alert("OTP Verified")
    }else{
      alert("Please Enter The Valid OTP")
    }
  }



  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value4 = 50;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 50000000;
  min = 500000;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 10000000;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval1(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  autoTicks2 = false;
  disabled2 = false;
  invert2 = false;
  max2 =12;
  min2 = 8.95;
  showTicks2 = false;
  step2 = 1;
  thumbLabel2 = false;
  value2 = 8.95;
  vertical2 = false;
  tickInterval2 = 1;

  getSliderTickInterval2(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  autoTicks3 = false;
  disabled3 = false;
  invert3 = false;
  max3 = 360;
  min3 = 12;
  showTicks3 = false;
  step3 = 1;
  thumbLabel3= false;
  value3 = 120;
  vertical3 = false;
  tickInterval3 = 1;

  getSliderTickInterval3(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  autoTicks5 = false;
  disabled5 = false;
  invert5 = false;
  max5 = 1800000;
  min5 = 1000;
  showTicks5 = false;
  step5 = 1;
  thumbLabel5 = false;
  value5 = 1800000;
  vertical5 = false;
  tickInterval5 = 1;

  getSliderTickInterval5(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  autoTicks6 = false;
  disabled6 = false;
  invert6 = false;
  max6 = 360;
  min6 = 12;
  showTicks6 = false;
  step6 = 1;
  thumbLabel6= false;
  value6 = 120;
  vertical6 = false;
  tickInterval6 = 1;

  getSliderTickInterval6(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  autoTicks7 = false;
  disabled7 = false;
  invert7 = false;
  max7 = 3000000;
  min7 = 200000;
  showTicks7 = false;
  step7 = 1;
  thumbLabel7= false;
  value7 = 200000;
  vertical7 = false;
  tickInterval7 = 1;

  getSliderTickInterval7(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  

  calculateEmi(){
    this.Emi = this.value*(this.value2/12/100)* Math.pow((1+this.value2/12/100),this.value3)/(Math.pow((1+this.value2/12/100),this.value3)-1);
    this.PrincipalInterest = (this.Emi*this.value3);
    this.InterestPayable = (this.PrincipalInterest-this.value);
    this.value4 = 0;
    this.value4 = 100;
  }

  changeAmountPositive(){
    var x=500;
    if(this.value >= 500000 && this.value < 50000000){
     this.value = this.value+x;
  }
}

  changeAmountNegative(){
    var x=500;
    if(this.value > 500000 && this.value <= 50000000){
      this.value = this.value-x;
    }
  }

  changeRatePositive(){
    var x=0.05;
    if(this.value2 >= 8.95 && this.value2 <12){
      this.value2 = this.value2+x;
    }
  }

  changeRateNegative(){
    var x=0.05;
    if(this.value2 > 8.95 && this.value2 <= 12){
      this.value2 = this.value2-x;
    }
  }

  changeMonthIncrease(){
    var x=1;
    if(this.value3 >= 12 && this.value3 < 360){
      this.value3 = this.value3+x;
    }
  }
  
  changeMonthDecerase(){
    var x=1;
    if(this.value3 > 12 && this.value3 <=360){
      this.value3 = this.value3-x;
    }
  }

  Pmaycalculator(){
    this.emiCal=false;
    this.PmayCal=true;
  }
  
  EmiCalculator(){
    this.PmayCal=false;
    this.emiCal=true
  }

  changeAnnualIncomePositive(){
    var x=500;
    if(this.value5 >= 1000 && this.value5 < 1800000){
      this.value5 = this.value5+x;
    }
  }

  changeAnnualIncomeNegative(){
    var x=500;
    if(this.value5 > 1000 && this.value5 <=1800000){
      this.value5 = this.value5-x;
    }
  }

  changeTenurePositive(){
    var x=1;
    if(this.value6 >= 12 && this.value6 <360){
      this.value6 = this.value6+x;
    }
  }

  changeTenureNegative(){
    var x=1;
    if(this.value6 >12 && this.value6 <=360){
      this.value6 = this.value6-x;
    }
  }

  changeLoanIncrease() {
    var x = 500;
    if (this.value7 >= 200000 && this.value7 < 3000000) {
      this.value7 = this.value7 + x;
    }
  }
  changeLoanDecerase(){
    var x=500;
    if(this.value7 > 200000 && this.value7 <=3000000){
      this.value7 = this.value7-x;
    }
  }




  products:any[]=[
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/1)%20Personal%20Loan%20Hover.svg",
      "name":"PERSONAL LOAN"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/2)%20Home%20Loan%20Hover.svg",
      "name":"HOME LOANS"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/3)%20Pre%20Approved%20Offers%20Hover.svg",
      "name":"PRE-APPROVED OFFERS"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/4)%20Business%20Loan%20Hover.svg",
      "name":"BUSINESS LOANS"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/5)%20Used%20Car%20Loan%20Hover.svg",
      "name":"USED CAR LOAN"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/6)%20Two%20Wheeler%20Loan%20Hover.svg",
      "name":"TWO WHEELER LOAN"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/7)%20Loan%20Against%20Property%20Hover.svg",
      "name":"LOAN AGAINST PROPERTY"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/8)%20Loan%20Against%20Securities%20Hover.svg",
      "name":"LOAN AGAINST SECURITY"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/Microfinance_2.svg",
      "name":"MICRO FINANCE"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/9)%20Credit%20Card%20Hover.svg",
      "name":"CREDIT CARD"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/10)%20Wealth%20Management%20Hover.svg",
      "name":"WEALTH MANAGEMENT"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/11)%20Consumer%20Durable%20Loan%20Hover.svg",
      "name":"CONSUMER DURABLE LOANS"
    },
    {
      "image":"https://www.tatacapital.com/content/dam/tata-capital/explore-our-product-images/12)%20Life%20Insurance%20Hover.svg",
      "name":"INSURANCE"
    }
  ]

}
