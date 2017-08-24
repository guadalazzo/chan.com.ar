 ///<reference path="../types/jquery.d.ts" />
 ///<reference path="../types/bootstrap.d.ts"/>
import { Component } from '@angular/core';
import { OnDestroy, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http} from '@angular/http';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',

})


export class Carousel {
    private start = false;
    urls = [];
    constructor(http: Http) {
            http.get('/getcarousel')
                .subscribe(res => this.startCarousel(res.json()));        
    }

    startCarousel(urls: string['http://sabbiabeachcondos.com/wp-content/uploads/2015/03/01_SABB-lifestyle.jpg']) {
        this.urls = urls;
        $('.carousel').carousel();
    }

    isActive(url: string) {
        return url === this.urls[0];
    }
}

