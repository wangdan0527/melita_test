import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../../service/rest-client.service'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.scss']
})
export class OfferManagementComponent implements OnInit {

  constructor(
  	private restService: RestService, 
    public dialog: MatDialog) { }

  private offers = []
  private displayedColumns: string[] = ['id', 'name', 'contractStartDate', 'contractEndDate', 'menu'];
  private dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
  	this.loadOffers()
  }

  loadOffers()
  {
  	this.restService.getOffers().subscribe(response => {
  		this.offers = response
  		this.dataSource = new MatTableDataSource(this.offers)
      this.dataSource.sort = this.sort
  	})
  }

  onDetails(element, i)
  {
  	const dialogRef = this.dialog.open(OfferDetailsComponent, {
	    width: '700px',
      data : element.id
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
