let account1_number = '000256784';
let account1_balance = 790;
let account2_number = '000986056';
let account2_balance = 5600;
let account3_number = '001546238';
let account3_balance = 78065;
let account4_number = '030987456';
let account4_balance = 120910;


let account_balance;
let action;

function bank_function() {
  let account_number = document.getElementById("acc_no");
  let selected_action = document.getElementById("action");

  if (selected_action.value === "balance") {
    if (account_number.value === account1_number) {
      account_balance = account1_balance;
    } else if (account_number.value === account2_number) {
      account_balance = account2_balance;
    } else if (account_number.value === account3_number) {
      account_balance = account3_balance;
    } else if (account_number.value === account4_number) {
      account_balance = account4_balance;
    }
    let print_result = document.getElementById("result");

    if (account_balance) {
      print_result.innerHTML = `Your account balance is ${account_balance} euros`;
    }
    else {
      print_result.innerHTML = `The account does not exist`;
    }
  }

  else if (selected_action.value === 'transfer') { // below code for money transfer

    // let target_account = document.getElementById(target_acc_no);


    if (account_number === account1_number) {
      account_balance = account1_balance;
    } else if (account_number === account2_number) {
      account_balance = account2_balance;
    } else if (account_number === account3_number) {
      account_balance = account3_balance;
    } else if (account_number === account4_number) {
      account_balance = account4_balance;
    }

    // if (account_balance !== undefined) {
      let element = document.getElementById(`transfer_panel`);
      element.className = "show";
      function bank_transfer() {
        // todo
      // }
    }
    // else print_result.innerHTML = `The account does not exist`;
    // if (target_account.value === account_number) {
    //   window.alert('Cant transfer to the same account.')
    // }
  }


  //   else if (target_account === account1_number || target_account === account2_number || target_account === account3_number || target_account === account4_number) {
  // //     let transfer_amount = parseInt(prompt('How much would you like to transfer?'));

  //     if (target_account === account1_number) {
  //       account1_balance = account1_balance + transfer_amount;
  //       account_balance = account_balance - transfer_amount;
  //     }
  //     else if (target_account === account2_number) {
  //       account2_balance = account2_balance + transfer_amount;
  //       account_balance = account_balance - transfer_amount;
  //     }
  //     else if (target_account === account3_number) {
  //       account3_balance = account3_balance + transfer_amount;
  //       account_balance = account_balance - transfer_amount;
  //     }
  //     else if (target_account === account4_number) {
  //       account4_balance = + transfer_amount;
  //       account_balance = account_balance - transfer_amount;
  //     }
  //     window.alert('New balance on your account is ' + account_balance)
  //   } else window.alert('Account doesn\'t exist')
  // } else window.alert('unknown action')
  //   ;

  //   if (account_number === account1_number) {
  //     account_balance = account1_balance;
  //   } else if (account_number === account2_number) {
  //     account_balance = account2_balance;
  //   } else if (account_number === account3_number) {
  //     account_balance = account3_balance;
  //   } else if (account_number === account4_number) {
  //     account_balance = account4_balance;
  //   }
}
