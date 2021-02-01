document.write(" <table border='1' width='600px' >  ");

for (let y = 0; y <= 8; y++) {

    document.write(" <tr> ");

    for (let x = 0; x <= 8; x++) {

        let total = x + y;

        if (total % 2 == 1) {
            document.write(" <td style='background:black;width:70px;height:70px' ></td> ");
        } else {
            document.write(" <td style='background:white;width:70px;height:70px' ></td> ");
        }

    }


    document.write(" </tr> ");
}


document.write(" </table> ");