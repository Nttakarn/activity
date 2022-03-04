<table width="600" border="1">
  <tr>
    <th width="91"> <div align="center">CustomerID </div></th>
    <th width="160"> <div align="center">Name </div></th>
    <th width="198"> <div align="center">Email </div></th>
    <th width="97"> <div align="center">CountryCode </div></th>
    <th width="70"> <div align="center">Budget </div></th>
    <th width="70"> <div align="center">Used </div></th>
  </tr>
  <?php
  $line = $_GET["Line"];
  if($line == 0){$line=1;}
  for($i=1;$i<=$line;$i++)
  {
  ?>
  <tr>
    <td><div align="center"><input type="text" name="txtCustomerID<?php echo $i;?>" size="5"></div></td>
    <td><input type="text" name="txtName<?php echo $i;?>" size="20"></td>
    <td><input type="text" name="txtEmail<?php echo $i;?>" size="20"></td>
    <td><div align="center"><input type="text" name="txtCountryCode<?php echo $i;?>" size="2"></div></td>
    <td align="right"><input type="text" name="txtBudget<?php echo $i;?>" size="5"></td>
    <td align="right"><input type="text" name="txtUsed<?php echo $i;?>" size="5"></td>
  </tr>
  <?php
  }
  ?>
  </table>
  <input type="submit" name="submit" value="submit">
  <input type="hidden" name="hdnLine" value="<?php echo $i;?>">