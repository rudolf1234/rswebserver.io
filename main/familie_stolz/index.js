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
res = res + box     (0, 0,  0, "Stolz Jakob<br>?? 1807, Münster<br>???<br>Maurer");
res = res + box     (0, 1,  0, "Stolz, Katharina<br>geb. Koch<br>???<br>???");
res = res + box     (0, 2,  0, "Feiner, Johann, Roth<br>6. April 1813, Roth<br>19. April 1879, Roth<br>Fabrikarbeiter");
res = res + box     (0, 3,  0, "Feiner, Elisabeth<br>geb. ???<br>??? 1812<br>???<br>Fuhrmann");

res = res + box     (0, 4,  0, "Harnecker, Jakob<br>22. März 1822<br>???");
res = res + box     (0, 5,  0, "Harnecker, Philippina<br>geb. Müller<br>19. März 1819, Diertersheim<br>???");
res = res + box     (0, 6,  0, "Schneider, Jakob<br>2. Februar 1822, Münster<br>5. Dezember 1899, Münster");
res = res + box     (0, 7,  0, "Schneider, Sofia <br>geb. Klingler<br>9. Februar 1832, Münster<br>??. Juli 1911, Münster");

res = res + line_hor(0, 0, box_width + box_hor_dist);
res = res + line_ver(0, 0, box_ver_dist);
res = res + line_ver(0, 1, 0.5*box_ver_dist);

res = res + line_hor(0, 2, box_width + box_hor_dist);
res = res + line_ver(0, 2, box_ver_dist);
res = res + line_ver(0, 3, 0.5*box_ver_dist);

res = res + line_hor(0, 4, box_width + box_hor_dist);
res = res + line_ver(0, 4, box_ver_dist);
res = res + line_ver(0, 5, 0.5*box_ver_dist);

res = res + line_hor(0, 6, box_width + box_hor_dist);
res = res + line_ver(0, 6, box_ver_dist);
res = res + line_ver(0, 7, 0.5*box_ver_dist);


// row 1
res = res + box     (1, 0,  0, "Stolz Heinrich<br>20. Mai 1841, Münster<br>17. Januar 1908, Münster<br>Fabrikarbeiter");
res = res + box     (1, 2,  0, "Stolz, ???<br>geb. Feiner<br>14. März 1843, Roth<br>29. Mai 1886, Münster");
res = res + box     (1, 4,  0, "Harnecker, Johann<br>8. Juni 1858<br>24. November 1927, Münster");
res = res + box     (1, 6,  0, "Harnecker, Susanna<br>geb. Schneider<br>17. Februar 1861, Münster<br>???");

res = res + line_hor(1, 0, 2*(box_width + box_hor_dist));
res = res + line_ver(1, 0, 0.5*box_ver_dist);
res = res + line_ver(1, 2, box_ver_dist);

res = res + line_hor(1, 4, 2*(box_width + box_hor_dist));
res = res + line_ver(1, 4, box_ver_dist);
res = res + line_ver(1, 6, 0.5*box_ver_dist);

// row 2
res = res + box     (2, 2, 14, "Stolz Heinrich<br>1. Juni 1880, Münster<br>9. September 1940<br>Eisenbahnschaffner</a>");
res = res + box     (2, 4,  2, "Stolz, Sophia<br>geb. Harnecker<br>2. Februar 1890, Münster<br>28. Juni 1971");
res = res + box     (2, 5,  0, "Klein, Friedrich Johann Phillip<br>???<br>???");
res = res + box     (2, 6, 12, "Klein Anna Erna<br>geb. Hill<br> 27. Oktober 1905<br>???");
res = res + box     (2, 9, 13, "Girl Gisela<br>geb. Spira<br> 10. Oktober 1939<br>???");

res = res + line_hor     (2, 0, 4*(box_width + box_hor_dist));
res = res + line_ver     (2, 2, box_ver_dist);
res = res + line_ver_down(2, 0, 0.5*box_ver_dist);
res = res + line_ver_down(2, 1, 0.5*box_ver_dist);
res = res + line_ver_down(2, 3, 0.5*box_ver_dist);
res = res + line_ver     (2, 4, box_ver_dist);

res = res + line_hor(2, 5, box_width + box_hor_dist);
res = res + line_ver(2, 5, box_ver_dist);
res = res + line_ver(2, 6, 0.5*box_ver_dist);

// row 3
res = res + box(3,  0, 15, "Stolz, Elisabeth<br>20. April 1927, Münster<br>13. September 1927");
res = res + box(3,  1,  0, "Stolz, Sophia<br>27. August 1924, Münster<br>29. August 1924");
res = res + box(3,  2,  0, "Stolz, Klara<br>27. August 1924, Münster<br>29. August 1924");
res = res + box(3,  3, 16, "Stolz, Gerhard Johann<br>23. November 1928<br>???");
res = res + box(3,  4,  0, "<a href=\"0020.html\">Stolz, Heinrich Ferdinand<br>13. Juli 1922, Münster<br>15. Februar 2001</a>");
res = res + box(3,  5,  7, "Stolz, Margarete Elisabeth Minna<br>geb. Klein<br>11. September 1928<br>3. Februar 1977");
res = res + box(3,  6,  1, "Reiber, Peter Josef<br>29. Juni 1929<br>???");
res = res + box(3,  7,  4, "Reiber, Anna Maria<br>geb. Donkel<br>17. Februar 1932<br>???");
res = res + box(3,  8,  0, "Beuter, Leonhard<br>1901<br>???");
res = res + box(3,  9,  0, "Beuter, Henriette<br>geb. Happ<br>???<br>???");
res = res + box(3, 10,  0, "Wehnert, Wilhem<br>1902<br>???");
res = res + box(3, 11,  0, "Wehnert, Maria<br>geb. ???<br>???<br>???");

res = res + line_hor(3, 4, box_width + box_hor_dist);
res = res + line_ver(3, 4, box_ver_dist);
res = res + line_ver(3, 5, box_ver_dist);

res = res + line_hor(3, 6, box_width + box_hor_dist);
res = res + line_ver(3, 6, box_ver_dist);
res = res + line_ver(3, 7, 0.5*box_ver_dist);

res = res + line_hor(3, 8, box_width + box_hor_dist);
res = res + line_ver(3, 8, box_ver_dist);
res = res + line_ver(3, 9, 0.5*box_ver_dist);

res = res + line_hor(3, 10, box_width + box_hor_dist);
res = res + line_ver(3, 10, box_ver_dist);
res = res + line_ver(3, 11, 0.5*box_ver_dist);

// row 4
res = res + box(4,  4, 9, "Stolz, Rudolf Friedrich Josef<br>9. Januar 1959<br>...");
res = res + box(4,  5, 5, "Reiber, Gisela Sofie Anna<br>geb. Stolz<br>10. August 1960<br>...");
res = res + box(4,  6, 8, "Reiber, Reiner Maria<br>7. Februar 1957<br>...");
res = res + box(4,  8, 0, "Beuter, Wilfried<br>2. Januar 1933<br>28. September 2022");
res = res + box(4, 10, 3, "Beuter, Ria Käthe<br>geb. Wehnert<br>18. Mai 1934<br>???");

res = res + line_hor(4, 5, box_width + box_hor_dist);
res = res + line_ver(4, 5, box_ver_dist);
res = res + line_ver(4, 6, box_ver_dist);

res = res + line_hor(4,  8, 2*(box_width + box_hor_dist));
res = res + line_ver(4,  8, box_ver_dist);
res = res + line_ver(4, 10, 0.5*box_ver_dist);

// row 5
res = res + box(5, 4,  0, "Reiber --> Hipp, Sandy<br>geb. Lauterbach<br>28. März 1988<br>...");
res = res + box(5, 5, 11, "Reiber Lanzer, Stefan Johannes<br>17. August 1982<br>...");
res = res + box(5, 6, 10, "Beuter-Reiber, Martina Petra geb. Reiber<br>28. September 1979<br>...");
res = res + box(5, 8,  0, "Beuter, Frank<br>24. September 1974<br>...");

res = res + line_hor(5, 4, box_width + box_hor_dist);
res = res + line_ver(5, 4, box_ver_dist);
res = res + line_ver(5, 5, 0.5*box_ver_dist);
res = res + line_ver(5, 5, 2*box_height + 2.5*box_ver_dist, 20);

res = res + line_hor     (5,  6, 4*(box_width + box_hor_dist));
res = res + line_ver     (5,  6, box_ver_dist, -20);
res = res + line_ver     (5,  6, 0.5*box_ver_dist);
res = res + line_ver_down(5,  7, 0.5*box_ver_dist);
res = res + line_ver     (5,  8, box_ver_dist);
res = res + line_ver_down(5,  9, 0.5*box_ver_dist);
res = res + line_ver_down(5, 10, 0.5*box_ver_dist);

// row 6
res = res + box(6,  4, 0, "Reiber --> Hipp, Leon<br>28. Dezember 2007<br>...");
res = res + box(6,  6, 0, "Reiber, Justin<br>30. September 1998<br>...");
res = res + box(6,  7, 0, "Beuter, Kevin Dominic<br>31. Juli 2004<br>...");
res = res + box(6,  8, 0, "Beuter, Jason Christopher<br>23. Februar 2006<br>...");
res = res + box(6,  9, 0, "Beuter, Lara Michelle<br>30. April 2009<br>...");
res = res + box(6, 10, 0, "Beuter, Dwayne Noel<br>30. April 2009<br>...");

// row 7
res = res + box(7, 4, 0, "Lanzer, Melanie<br>28. September 1981<br>...");

res = res + line_hor(7, 4, box_width + box_hor_dist + 20);
res = res + line_ver(7, 4, box_ver_dist);

// row 8
res = res + box(8, 4, 0, "Lanzer, Tammy<br>18. Februar 2018<br>...");

// row 9
/*


*/
data = data +   data_row("h3", "Reiber, Peter Josef", 1) + 
                data_row("img", "Reiber_Peter_Josef.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Stolz, Sophia<br>geb.Harnecker<br><br>sie ist die Patentante von Girl, Gisela Sofia geb. Spira<br><br>Heirat mit Stolz Heinrich am 14. September 1921 auf dem Standesamt in Bingerbrück, kirchliche Trauung am 15. September in Bingerbrück, Trauzeugen Karl Gerlach und Jakob Harnecker", 2) + 
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
                data_row("img", "klein_anna_mutter_onkel_hans.jpg") +
                data_row("img", "mutter_kommunion.jpg") +
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
                data_row("img", "klein_anna_mutter_onkel_hans.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "")+
                
                data_row("h3", "Girl, Gisela Sofia<br><br>sie ist die Patentante von Reiber, Gisela Sofie Anna geb. Stolz", 13) + 
                data_row("img", "mutter_tantegisela_gisela_rudolf_00.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Stolz Heinrich<br><br>Heirat mit Stolz, Sophia geb. Harnecker am 14. September 1921 auf dem Standesamt in Bingerbrück, kirchliche Trauung am 15. September in Bingerbrück, Trauzeugen Karl Gerlach und Jakob Harnecker<br><br>am 9. September 1940 bei einem Eisenbahnunfall in Koblenz ums Leben gekommen", 14) + 
                data_row("img", "stolz_heinrich_opa_deutsche_reichsbahn.jpg") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Stolz, Elisabeth<br><br>Paten waren Elisa Harnecker geb. Schall, Taufe in Langenlonsheim am 23. April 1927", 15) + 
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                
                data_row("h3", "Stolz, Gerhard Johann<br><br>Taufe am 25. November 1928, Paten waren Johann Harnecker", 16) + 
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "") +
                data_row("empty", "");

                               
                              
                
                
res = res + data_add(data, 10);


// populate data to html page
$("#container").html(res);

