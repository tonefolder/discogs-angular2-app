import { Injectable } from '@angular/core';

import { MdlSnackbarService } from '@angular-mdl/core';

@Injectable()
export class SnackbarService {
  showError(message: string) {
    this.mdlSnackbarService.showSnackbar({
      message: message,
      action: {
        handler: () => { },
        text: 'OK'
      }
    });
  }

  constructor(private mdlSnackbarService: MdlSnackbarService) { }
}
