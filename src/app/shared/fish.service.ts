import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fish } from '../interfaces/fish.interface';

@Injectable({
  providedIn: 'root'
})

export class FishService {
  private fishBehaviorSubject$: BehaviorSubject<fish> = new BehaviorSubject({color: "red"})

  public setFish(fish: fish): void {
    this.fishBehaviorSubject$.next(fish);
  }
  public getFish(): Observable<fish> {
    return this.fishBehaviorSubject$.asObservable()
  }
  
}
