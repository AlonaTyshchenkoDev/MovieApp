import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy{

  public destroy$: Subject<void> = new Subject<void>();
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private storeService: StoreService) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.minLength(1), Validators.required]]
    });
  }

  approveToken(): void {
    const token = localStorage.getItem('token');
    window.open(`https://www.themoviedb.org/authenticate/${token}`, "_blank");
  }

  loginUser(): void {
    this.approveToken();
    setTimeout(() => {
      this.storeService.createSessionId();
    }, 7000)
  }
}
