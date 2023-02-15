import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private dataSource: Subject<unknown> = new Subject<unknown>();

  public data = this.dataSource.asObservable();

  shareData(dataToShare: unknown): void {
    this.dataSource.next(dataToShare);
  }
}
