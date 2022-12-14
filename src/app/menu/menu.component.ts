import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  imagePath = '../../assets/img/check-tom-sm.jpg';

  clicked0 = true; clicked1 = true; clicked2 = true; clicked3 = true;
  clicked4 = true; clicked5 = true; clicked6 = true; clicked7 = true;
  clicked8 = true; clicked9 = true; clicked10 = true; clicked11 = true;
  clicked12 = true; clicked13 = true; clicked14 = true; clicked15 = true;
  clicked16 = true; clicked17 = true; clicked18 = true; clicked19 = true;
  clicked20 = true; clicked21 = true; clicked22 = true; clicked23 = true;
  clicked24 = true; clicked25 = true; clicked26 = true; clicked27 = true;
  clicked28 = true; clicked29 = true; clicked30 = true; clicked31 = true;

  smallTotal: any[] = [];
  mdTotal: any[] = [];
  lgTotal: any[] = [];
  xlTotal: any[] = [];
  priceSmall = '';
  priceMd = '';
  priceLg = '';
  offeredPriceLg = '';
  priceXl = '';
  barbecue = false;
  pepperoni = false;

  constructor() {}

  ngOnInit() {}

  getTomatoesTick(i: number) {
    switch (i) {
      case 0:
        this.clicked0 = !this.clicked0;
        this.pushToSmall(i);
        break;
      case 1:
        this.clicked1 = !this.clicked1;
        this.pushToMd(i);
        break;
      case 2:
        this.clicked2 = !this.clicked2;
        this.pushToLg(i);
        break;
      case 3:
        this.clicked3 = !this.clicked3;
        this.pushToXl(i);
        break;
    }
  }

  getOnionsTick(i: number) {
    switch (i) {
      case 4:
        this.clicked4 = !this.clicked4;
        this.pushToSmall(i);
        break;
      case 5:
        this.clicked5 = !this.clicked5;
        this.pushToMd(i);
        break;
      case 6:
        this.clicked6 = !this.clicked6;
        this.pushToLg(i);
        break;
      case 7:
        this.clicked7 = !this.clicked7;
        this.pushToXl(i);
        break;
    }
  }

  getBellPepperTick(i: number) {
    switch (i) {
      case 8:
        this.clicked8 = !this.clicked8;
        this.pushToSmall(i);
        break;
      case 9:
        this.clicked9 = !this.clicked9;
        this.pushToMd(i);
        break;
      case 10:
        this.clicked10 = !this.clicked10;
        this.pushToLg(i);
        break;
      case 11:
        this.clicked11 = !this.clicked11;
        this.pushToXl(i);
        break;
    }
  }
  getMushroomsTick(i: number) {
    switch (i) {
      case 12:
        this.clicked12 = !this.clicked12;
        this.pushToSmall(i);
        break;
      case 13:
        this.clicked13 = !this.clicked13;
        this.pushToMd(i);
        break;
      case 14:
        this.clicked14 = !this.clicked14;
        this.pushToLg(i);
        break;
      case 15:
        this.clicked15 = !this.clicked15;
        this.pushToXl(i);
        break;
    }
  }
  getPineappleTick(i: number) {
    switch (i) {
      case 16:
        this.clicked16 = !this.clicked16;
        this.pushToSmall(i);
        break;
      case 17:
        this.clicked17 = !this.clicked17;
        this.pushToMd(i);
        break;
      case 18:
        this.clicked18 = !this.clicked18;
        this.pushToLg(i);
        break;
      case 19:
        this.clicked19 = !this.clicked19;
        this.pushToXl(i);
        break;
    }
  }
  getSausageTick(i: number) {
    switch (i) {
      case 20:
        this.clicked20 = !this.clicked20;
        this.pushToSmall(i);
        break;
      case 21:
        this.clicked21 = !this.clicked21;
        this.pushToMd(i);
        break;
      case 22:
        this.clicked22 = !this.clicked22;
        this.pushToLg(i);
        break;
      case 23:
        this.clicked23 = !this.clicked23;
        this.pushToXl(i);
        break;
    }
  }
  getPepperoniTick(i: number) {
    switch (i) {
      case 24:
        this.clicked24 = !this.clicked24;
        this.pushToSmall(i);
        break;
      case 25:
        this.clicked25 = !this.clicked25;
        this.pushToMd(i);
        break;
      case 26:
        this.clicked26 = !this.clicked26;
        this.pushToLg(i);
        break;
      case 27:
        this.clicked27 = !this.clicked27;
        this.pushToXl(i);
        break;
    }
  }
  getBarbecueTick(i: number) {
    switch (i) {
      case 28:
        this.clicked28 = !this.clicked28;
        this.pushToSmall(i);
        break;
      case 29:
        this.clicked29 = !this.clicked29;
        this.pushToMd(i);
        break;
      case 30:
        this.clicked30 = !this.clicked30;
        this.pushToLg(i);
        break;
      case 31:
        this.clicked31 = !this.clicked31;
        this.pushToXl(i);
        break;
    }
  }

  pushToSmall(i: number) {
    switch (i) {
      case 0:
        if (!this.clicked0) this.smallTotal.push(1);
         else  this.smallTotal.pop();
        this.calculate(i);
        break;
      case 4:
        if (!this.clicked4) this.smallTotal.push(0.5);
       else this.smallTotal.pop();
        this.calculate(i);
        break;
      case 8:
        if (!this.clicked8) this.smallTotal.push(1);
        else this.smallTotal.pop();
        this.calculate(i);
        break;
      case 12:
        if (!this.clicked12) this.smallTotal.push(1.2);
         else this.smallTotal.pop();
         this.calculate(i);
        break;
      case 16:
        if (!this.clicked16) this.smallTotal.push(0.75);
         else this.smallTotal.pop();
         this.calculate(i);
        break;
      case 20:
        if (!this.clicked20) this.smallTotal.push(1);
        else this.smallTotal.pop();
        this.calculate(i);
        break;
      case 24:
        if (!this.clicked24) this.smallTotal.push(2);
        else this.smallTotal.pop();
        this.calculate(i);
        break;
      case 28:
        if (!this.clicked28) this.smallTotal.push(3);
       else this.smallTotal.pop();
        this.calculate(i);
        break;
    }
  }

  pushToMd(i: number) {
    switch (i) {
      case 1:
        if (!this.clicked1) this.mdTotal.push(1);
         else this.mdTotal.pop();
        this.calculateMd(i);
        break;
      case 5:
        if (!this.clicked5) this.mdTotal.push(0.5);
        else this.mdTotal.pop();
        this.calculateMd(i);
        break;
      case 9:
        if (!this.clicked9) this.mdTotal.push(1);
        else this.mdTotal.pop();
        this.calculateMd(i);
        break;
      case 13:
        if (!this.clicked13) this.mdTotal.push(1.2);
         else this.mdTotal.pop();
        this.calculateMd(i);
        break;
      case 17:
        if (!this.clicked17) this.mdTotal.push(0.75);
        else this.mdTotal.pop();
        this.calculateMd(i);
        break;
      case 21:
        if (!this.clicked21) this.mdTotal.push(1);
         else this.mdTotal.pop();
        this.calculateMd(i);
        break;
      case 25:
        if (!this.clicked25) this.mdTotal.push(2);
         else this.mdTotal.pop();
        this.calculateMd(i);
        break;
      case 29:
        if (!this.clicked29) this.mdTotal.push(3);
         else this.mdTotal.pop();
        this.calculateMd(i);
        break;
    }
  }

  pushToLg(i: number) {
    switch (i) {
      case 2:
        if (!this.clicked2) this.lgTotal.push(1);
         else this.lgTotal.pop();
        this.calculateLg(i);
        break;
      case 6:
        if (!this.clicked6) this.lgTotal.push(0.5);
         else this.lgTotal.pop();
        this.calculateLg(i);
        break;
      case 10:
        if (!this.clicked10)  this.lgTotal.push(1);
        else this.lgTotal.pop();
        this.calculateLg(i);
        break;
      case 14:
        if (!this.clicked14) this.lgTotal.push(1.2);
         else this.lgTotal.pop();
        this.calculateLg(i);
        break;
      case 18:
        if (!this.clicked18) this.lgTotal.push(0.75);
         else this.lgTotal.pop();
        this.calculateLg(i);
        break;
      case 22:
        if (!this.clicked22) this.lgTotal.push(1);
         else this.lgTotal.pop();
        this.calculateLg(i);
        break;
      case 26:
        if (!this.clicked26) {
          this.lgTotal.push(2);
          this.pepperoni = true;
        } else {
          this.lgTotal.pop();
          this.pepperoni = false;
        }
        this.calculateLg(i);
        break;
      case 30:
        if (!this.clicked30) {
          this.lgTotal.push(3);
          this.barbecue = true;
        } else {
          this.lgTotal.pop();
          this.barbecue = false;
        }
        this.calculateLg(i);
        break;
    }
  }

  pushToXl(i: number) {
    switch (i) {
      case 3:
        if (!this.clicked3) this.xlTotal.push(1);
         else this.xlTotal.pop();
        this.calculateXl(i);
        break;
      case 7:
        if (!this.clicked7)  this.xlTotal.push(0.5);
         else this.xlTotal.pop();
        this.calculateXl(i);
        break;
      case 11:
        if (!this.clicked11) this.xlTotal.push(1);
         else this.xlTotal.pop();
        this.calculateXl(i);
        break;
      case 15:
        if (!this.clicked15) this.xlTotal.push(1.2);
         else this.xlTotal.pop();
        this.calculateXl(i);
        break;
      case 19:
        if (!this.clicked19) this.xlTotal.push(0.75);
         else this.xlTotal.pop();
        this.calculateXl(i);
        break;
      case 23:
        if (!this.clicked23) this.xlTotal.push(1);
         else this.xlTotal.pop();
        this.calculateXl(i);
        break;
      case 27:
        if (!this.clicked27) this.xlTotal.push(2);
        else this.xlTotal.pop();
        this.calculateXl(i);
        break;
      case 31:
        if (!this.clicked31) this.xlTotal.push(3);
         else this.xlTotal.pop();
        this.calculateXl(i);
        break;
    }
  }

  calculate(i: number) {
    switch (i) {
      case 0:
      case 4:
      case 8:
      case 12:
      case 16:
      case 20:
      case 24:
      case 28:
        this.calculateSmall('small');
        break;
    }
  }

  calculateMd(i: number) {
    switch (i) {
      case 1:
      case 5:
      case 9:
      case 13:
      case 17:
      case 21:
      case 25:
      case 29:
        this.calculateSmall('md');
        break;
    }
  }

  calculateLg(i: number) {
    switch (i) {
      case 2:
      case 6:
      case 10:
      case 14:
      case 18:
      case 22:
      case 26:
      case 30:
        this.calculateSmall('lg');
        break;
    }
  }

  calculateXl(i: number) {
    switch (i) {
      case 3:
      case 7:
      case 11:
      case 15:
      case 19:
      case 23:
      case 27:
      case 31:
        this.calculateSmall('xl');
        break;
    }
  }

  calculateSmall(sz: any) {
    switch (sz) {
      case 'small':
        let price = this.smallTotal.reduce((acc, cur) => acc + cur, 0);
        if (price === 0) this.priceSmall = '';
        else this.priceSmall = '$' + (5 + price);
        break;
      case 'md':
        let priceMed = this.mdTotal.reduce((acc, cur) => acc + cur, 0);
        if (this.mdTotal.length === 0) this.priceMd = '';
        else {
          if (this.mdTotal.length === 2) this.priceMd = '$' + 5;
          else if (this.mdTotal.length === 4) this.priceMd = '$' + 9;
          else this.priceMd = '$' + (7 + priceMed);
        }
        break;
      case 'lg':
        let priceLarge = this.lgTotal.reduce((acc, cur) => acc + cur, 0);
        if (priceLarge === 0) this.priceLg = '';
        else {
          if((this.barbecue && this.pepperoni) || ((this.barbecue || this.pepperoni) && this.lgTotal.length === 3)
               || (!this.barbecue && !this.pepperoni && this.lgTotal.length === 4)) {
            this.priceLg = '$' + (8 + priceLarge);
            this.offeredPriceLg = '$' + (8 + priceLarge) / 2;
          } 
           else {
            this.priceLg = '$' + (8 + priceLarge);
            this.offeredPriceLg = '$' + (8 + priceLarge);
          }
        }
        break;
      case 'xl':
        let priceXL = this.xlTotal.reduce((acc, cur) => acc + cur, 0);
        if (priceXL === 0) this.priceXl = '';
        else this.priceXl = '$' + (9 + priceXL);
        break;
    }
  }
}
