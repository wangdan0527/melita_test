import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { RestService } from '../../../service/rest-client.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

	private bLoading: boolean = true;
	private offerId: number = 0;

  	private subscriptions = []
  	private displayedColumns: string[] = ['id', 'name', 'type', 'usage'];
  	private dataSource = new MatTableDataSource([]);
    

  	constructor(
	  	private restService: RestService,
	  	public dialogRef: MatDialogRef<OfferDetailsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
	  	this.offerId = this.data

	  	this.loadSubscriptions()
	}

	loadSubscriptions()
	{
		this.restService.getSubscriptions(this.offerId).subscribe(response => {
			this.subscriptions = response	
			this.dataSource = new MatTableDataSource(this.subscriptions)
      		this.bLoading = false;
		})
	}

}
