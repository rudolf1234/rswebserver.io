//#########################################################################
// BACKGROUDN INFO
//#########################################################################
/*
- HTML file im Browser anzeigen - Ansicht [] - Ctrl P ald pdf mit A3 speichern - FN F11 - 
  per mail auf mein Handy - App Eigene Dateien öffnen - selektieren -
  nach WhattsApp verteilen

*/


//#########################################################################
// GLOBAL VARIABLES
//#########################################################################
var res = "";
var data = "";

var box_width     = 200;
var box_height    = 100;
var box_ver_dist  =  50;
var box_ver_start =  40;
var box_hor_dist  =  40;
var box_hor_start =  10;

//#########################################################################
// HELPER
//#########################################################################
//.........................................................................
function data_row(key, value, bookmark=-1){
    var res = "";

    res = res + "<div class=\"div_data\">";

    if (key == "h3"){
        res = res + "<h3 ";
        if (bookmark > -1){
            res = res + "id=\"" + bookmark + "\"";
        }
        res = res + ">" + value + "</h3>";
    }
    else if(key == "img"){
        res = res + "<div class=\"div_data\"><img src=../../assets/familie_stolz/" + value + "></div>";
    }
    else if (key == "empty"){
        res = res + "<div></div>";
    }

    res = res + "</div>";
    return res;
}
//.........................................................................
function data_add(value, box_top_number){
    return  "<div class=\"box_data\" style=\" top: "  + box_top(box_top_number) + "px; \">" + 
            "<div class=table_6_col>" + value + "</div></div>";
}
//.........................................................................
function box_top(row){
    return (box_ver_start + (row * (box_height + box_ver_dist)));
}
//.........................................................................
function box_left(col){
    return (box_hor_start + (col * (box_width  + box_hor_dist)));
}
//.........................................................................
function box(row, col, link, text){
    var res = "";

    res = res + "<div class=\"box\" style=\"" +
                "top: "  + box_top(row) + "px; " +
                "left: " + box_left(col) + "px;\">";
    if (link > 0)
        res = res + "<a href=\"#" + link + "\">"; 
    res = res + text;
    if (link > 0)
        res = res + "</a>"; 
    res = res + "</div>\n";

    return res;
}
//.........................................................................
function line_ver(row, col, length, offset_hor=0, offset_ver=0){
    var res = "";
    res =   "<div class=\"line_ver\" style=\"" +
            "top: "    + (box_height     + box_top(row) + offset_ver) + "px; " +
            "left: "   + (0.5*box_width  + box_left(col) + offset_hor) + "px; " +
            "height: " + length + "px; " +
            "\"></div>\n";

    return res;
}
//.........................................................................
function line_ver_down(row, col, length){
    var res = "";
    res =   "<div class=\"line_ver\" style=\"" +
            "top: "    + (box_height + box_top(row) + 0.5*box_ver_dist) + "px; " +
            "left: "   + (0.5*box_width  + box_left(col)) + "px; " +
            "height: " + length + "px; " +
            "\"></div>\n";

    return res;
}
//.........................................................................
function line_hor(row, col, length){
    var res = "";
    res =   "<div class=\"line_hor\" style=\"" +
            "top: "    + (box_height     + box_top(row) + 0.5 * box_ver_dist)  + "px; " +
            "left: "   + (0.5*box_width  + box_left(col)) + "px; " +
            "width: "  + length + "px; " +
            "\"></div>\n";

    return res;
}

//#########################################################################
// MAIN DATA FUNCTION
//#########################################################################
// row 0
res = res + box     (0, 0,  0, "<a href=\"0010.html\">Stolz Heinrich<br>???<br>??.??.1940</a>");
res = res + box     (0, 1,  2, "Stolz, Sophia<br>geb. Harnecker<br>2. Februar 1890<br>28. Juni 1971");
res = res + box     (0, 2,  0, "Klein, Friedrich Johann Phillip<br>???<br>???");
res = res + box     (0, 3, 12, "Klein Anna Erna<br>geb. Hill<br> 27. Oktober 1905<br>???");

res = res + line_hor(0, 0, box_width + box_hor_dist);
res = res + line_ver(0, 0, box_ver_dist);
res = res + line_ver(0, 1, box_ver_dist);

res = res + line_hor(0, 2, box_width + box_hor_dist);
res = res + line_ver(0, 2, box_ver_dist);
res = res + line_ver(0, 3, 0.5*box_ver_dist);

// row 1
res = res + box(1, 0, 0, "Stolz, Hans<br>???<br>???");
res = res + box(1, 1, 0, "<a href=\"0020.html\">Stolz, Heinrich Ferdinand<br>13. Juli 1922<br>15. Februar 2001</a>");
res = res + box(1, 2, 7, "Stolz, Margarete Elisabeth Minna<br>geb. Klein<br>11. September 1928<br>3. Februar 1977");
res = res + box(1, 3, 1, "Reiber, Peter Josef<br>29. Juni 1929<br>???");
res = res + box(1, 4, 4, "Reiber, Anna Maria<br>geb. Donkel<br>17. Februar 1932<br>???");
res = res + box(1, 5, 0, "Beuter, Leonhard<br>1901<br>???");
res = res + box(1, 6, 0, "Beuter, Henriette<br>geb. Happ<br>???<br>???");
res = res + box(1, 7, 0, "Wehnert, Wilhem<br>1902<br>???");
res = res + box(1, 8, 0, "Wehnert, Maria<br>geb. ???<br>???<br>???");

res = res + line_hor(1, 1, box_width + box_hor_dist);
res = res + line_ver(1, 1, box_ver_dist);
res = res + line_ver(1, 2, box_ver_dist);

res = res + line_hor(1, 3, box_width + box_hor_dist);
res = res + line_ver(1, 3, box_ver_dist);
res = res + line_ver(1, 4, 0.5*box_ver_dist);

res = res + line_hor(1, 5, box_width + box_hor_dist);
res = res + line_ver(1, 5, box_ver_dist);
res = res + line_ver(1, 6, 0.5*box_ver_dist);

res = res + line_hor(1, 7, box_width + box_hor_dist);
res = res + line_ver(1, 7, box_ver_dist);
res = res + line_ver(1, 8, 0.5*box_ver_dist);

// row 2
res = res + box(2, 1, 9, "Stolz, Rudolf Friedrich Josef<br>9. Januar 1959<br>...");
res = res + box(2, 2, 5, "Reiber, Gisela Sofie Anna<br>geb. Stolz<br>10. August 1960<br>...");
res = res + box(2, 3, 8, "Reiber, Reiner Maria<br>7. Februar 1957<br>...");
res = res + box(2, 5, 0, "Beuter, Wilfried<br>2. Januar 1933<br>28. September 2022");
res = res + box(2, 7, 3, "Beuter, Ria Käthe<br>geb. Wehnert<br>18. Mai 1934<br>???");

res = res + line_hor(2, 2, box_width + box_hor_dist);
res = res + line_ver(2, 2, box_ver_dist);
res = res + line_ver(2, 3, box_ver_dist);

res = res + line_hor(2, 5, 2*(box_width + box_hor_dist));
res = res + line_ver(2, 5, box_ver_dist);
res = res + line_ver(2, 7, 0.5*box_ver_dist);

// row 3
res = res + box(3, 1,  0, "Reiber --> Hipp, Sandy<br>geb. Lauterbach<br>28. März 1988<br>...");
res = res + box(3, 2, 11, "Reiber Lanzer, Stefan Johannes<br>17. August 1982<br>...");
res = res + box(3, 3, 10, "Beuter-Reiber, Martina Petra geb. Reiber<br>28. September 1979<br>...");
res = res + box(3, 5,  0, "Beuter, Frank<br>24. September 1974<br>...");

res = res + line_hor(3, 1, box_width + box_hor_dist);
res = res + line_ver(3, 1, box_ver_dist);
res = res + line_ver(3, 2, 0.5*box_ver_dist);
res = res + line_ver(3, 2, 2*box_height + 2.5*box_ver_dist, 20);

res = res + line_hor     (3, 3, 4*(box_width + box_hor_dist));
res = res + line_ver     (3, 3, box_ver_dist, -20);
res = res + line_ver     (3, 3, 0.5*box_ver_dist);
res = res + line_ver_down(3, 4, 0.5*box_ver_dist);
res = res + line_ver     (3, 5, box_ver_dist);
res = res + line_ver_down(3, 6, 0.5*box_ver_dist);
res = res + line_ver_down(3, 7, 0.5*box_ver_dist);

// row 4
res = res + box(4, 1, 0, "Reiber --> Hipp, Leon<br>28. Dezember 2007<br>...");
res = res + box(4, 3, 0, "Reiber, Justin<br>30. September 1998<br>...");
res = res + box(4, 4, 0, "Beuter, Kevin Dominic<br>31. Juli 2004<br>...");
res = res + box(4, 5, 0, "Beuter, Jason Christopher<br>23. Februar 2006<br>...");
res = res + box(4, 6, 0, "Beuter, Lara Michelle<br>30. April 2009<br>...");
res = res + box(4, 7, 0, "Beuter, Dwayne Noel<br>30. April 2009<br>...");

// row 5
res = res + box(5, 1, 0, "Lanzer, Melanie<br>28. September 1981<br>...");

res = res + line_hor     (5, 1, box_width + box_hor_dist + 20);
res = res + line_ver     (5, 1, box_ver_dist);

// row 6
res = res + box(6, 1, 0, "Lanzer, Tammy<br>18. Februar 2018<br>...");

// row 7
/*


*/
data = data +   data_row("h3", "Reiber, Peter Josef", 1) + 
                data_row("img", "Reiber_Peter_Josef.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Stolz, Sophia<br>geb.Harnecker", 2) + 
                data_row("img", "StolzSophia_gebHarnecker_Sterbeurkunde.jpg") +
                data_row("img", "oma_gisela_rudolf.jpg") +
                data_row("img", "StolzSophia_DeutscheBundesbahnPersonenausweis_00.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                   
                data_row("h3", "Beuter, Ria Käthe", 3) + 
                data_row("img", "BeuterRiaKaethe_00.jpg") +
                data_row("img", "BeuterRiaKaethe_01.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Reiber, Anna Maria", 4) + 
                data_row("img", "Reiber_Anna_Maria.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +

                data_row("h3", "Reiber, Gisela Sofie<br>Anna<br>geb. Stolz", 5) + 
                data_row("img", "StolzGiselaSofiaAnna_Geburtsurkunde.jpg") +
                data_row("img", "ReiberReinerGisela_Aufgebotsbescheinigung.jpg") +
                data_row("img", "gisela_16.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Stolz, Margarete Elisabeth<br>Minna<br>geb. Klein<br><br>Größe 172 cm<br>Augenfarbe blau", 7) + 
                data_row("img", "KleinMargarete_Geburtsurkunde.jpg") +
                data_row("img", "StolzHeinrichMargarethe_Heiratsurkunde.jpg") +
                data_row("img", "KleinMargarete_Sterbeurkunde.jpg") +
                data_row("img", "vater_mutter_hochzeit_04.jpg") +
                data_row("img", "StolzMargarete_Personalausweis_00.jpg") + 
                data_row("empty", "") +
                data_row("img", "StolzMargarete_DGBMitdliedsbuch_00.jpg") + 
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +

                data_row("h3", "Reiber, Reiner Maria", 8) + 
                data_row("img", "ReiberReinerGisela_Aufgebotsbescheinigung.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Stolz, Rudolf Friedrich<br>Josef", 9) + 
                data_row("img", "StolzRudolf_Geburtsurkunde.jpg") +
                data_row("img", "rudolf_18.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Beuter-Reiber, Martina<br>Petra<br>geb. Reiber", 10) + 
                data_row("img", "ReiberMartina_Geburtsurkunde.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Reiber Lanzer, Stefan<br>Johannes", 11) + 
                data_row("img", "ReiberStefan_Geburtsurkunde.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Klein, Anna, Erna<br>geborene Hill<br><br>Größe 162 cm<br> Augenfarbe graugrün<br> Narbe hinter linkem Ohr<br><br>Wohnort Bad Kreuznach<br>Leitergasse 13", 12) + 
                data_row("img", "KleinAnna_Personalausweis_00.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "");


                
                
                
                
res = res + data_add(data, 7);


// populate data to html page
$("#container").html(res);

