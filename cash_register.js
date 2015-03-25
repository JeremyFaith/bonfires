
function drawer(price, cash, cid) {
  var changeArray = [];
  var change = cash - price;
  var sum = 0;
  
  for(var i = 0; i < cid.length; i++) {
    
    sum = sum + cid[i][1];    
  }
  
  sum = Math.round(sum*100) / 100;
  
  if (sum < change) {
    return "Insufficient Funds";
  }else if (sum == change) {
    return "Closed";
  }else {
      
    changeNeeded(change);
      
  }
    
    function changeNeeded(change) {
        var bills = parseInt( change.toFixed(2).split(".")[0] );
        var coins = parseInt( change.toFixed(2).split(".")[1] );
        //coins = coins/100;
        console.log(coins);
        cva = [1, 5, 10, 25]; // coinValueArray
        bva = [1,5,10,20,100]; // billValueArray
        
        for(var j = 3; 0 <= j; j--) {
            
            console.log( Math.round(cid[j][1]*100) );
            //console.log( cid[j][1]*100);
            
            if( Math.round(cid[j][1]*100) > coins && coins >= cva[j]) {
                changeArray.push( [cid[j][0], Math.floor(coins/cva[j])] );
                coins = coins % cva[j];
                console.log("test " + coins)
            }else if (coins >= cva[j]) { coins = coins - cid[j][1];}
        }
      
       return changeArray; 
    }// function changeNeeded

  console.log(changeArray);
  
}// function drawer

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(19.33, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);

***************// works but tidy up program

function drawer(price, cash, cid) {
  var changeArray = [];
  var change = cash - price;
  var sum = 0;
  
  for(var i = 0; i < cid.length; i++) {
    
    sum = sum + cid[i][1];    
  }
  
  sum = Math.round(sum*100) / 100;
  
  if (sum < change) {
    return "Insufficient Funds";
  }else if (sum == change) {
    return "Closed";
  }else {
      
    changeNeeded(change);
      
  }
    
    function changeNeeded(change) {
        var bills = parseInt( change.toFixed(2).split(".")[0] );
        var coins = parseInt( change.toFixed(2).split(".")[1] );
       
        
        cva = [1, 5, 10, 25]; // coinValueArray
        bva = [0,0,0,0,1,5,10,20,100]; // billValueArray
        
        for(var k = 8; 4 <= k; k--) {
            
            
            if ( cid[k][1] > bills && bills >= bva[k]) {
                changeArray.push( [cid[k][0], Math.floor(bills/bva[k])*bva[k]]);
                bills = bills % bva[k];
            }else if (bills >=bva[k]) { bills = bills - cid[k][1]; changeArray.push( [cid[k][0], cid[k][1]] ); }
        
        }          
        
        for(var j = 3; 0 <= j; j--) {
            
           
            
            if ( Math.round(cid[j][1]*100) > coins && coins >= cva[j]) {
                changeArray.push( [cid[j][0], Math.floor(coins/cva[j])*cva[j]/100] );
                coins = coins % cva[j];
                
            }else if (coins >= cva[j]) { coins = coins - cid[j][1]; changeArray.push( [cid[j][0], cid[j][1] ] );}
        }
      
       return changeArray; 
    }// function changeNeeded

  
  return changeArray; 
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);