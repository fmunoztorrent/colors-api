import csv

# CSV to SQL Exporter. By Fabian Muñoz T.
# Usage:
# sudo chmod +x importer.py && python3 importer.py > sql_colors.sql
#
# The generated sql queries you can paste them intp sql phpmyadmin panel or load sql_colors.sql directly using msql -uroot -ppaswword color-db < sql_colors.sql

"""
CSV Example

"id","name","year","color","pantone_value"
"1","cerulean","2000","#98B2D1","15-4020"
"2","fuchsia rose","2001","#C74375","17-2031"
"3","true red","2002","#BF1932","19-1664"
"4","aqua sky","2003","#7BC4C4","14-4811"
"5","tigerlily","2004","#E2583E","17-1456"
"6","blue turquoise","2005","#53B0AE","15-5217"
"7","sand dollar","2006","#DECDBE","13-1106"
"8","chili pepper","2007","#9B1B30","19-1557"
"9","blue iris","2008","#5A5B9F","18-3943"
"10","mimosa","2009","#F0C05A","14-0848"
"11","turquoise","2010","#45B5AA","15-5519"
"12","honeysuckle","2011","#D94F70","18-2120"

"""


counter=0
with open('./colors.csv', 'r', newline='') as csvfile:
    read_csv = csv.reader(csvfile, delimiter=',')
    for row in read_csv:
        if not counter:
            counter += 1
            continue

        print(""" INSERT INTO colors (name, `year`, color, pantoneValue, createdAt, updatedAt) VALUES ('{}',{},'{}','{}', now(), now() );""".format(row[1], row[2], row[3], row[4]))