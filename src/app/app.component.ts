import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconFieldModule, InputIconModule, InputTextModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
      this.primengConfig.ripple = false
  }
  title = 'Lavadores admin';
}
