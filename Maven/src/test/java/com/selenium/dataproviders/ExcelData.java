package com.selenium.dataproviders;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.testng.annotations.DataProvider;

public class ExcelData {
	
	@DataProvider(name="sample")
	public static Object getExcelData() throws IOException,FileNotFoundException {
			FileInputStream fis = new FileInputStream("/home/prasanna/Downloads/Untitled spreadsheet.xls");
			Workbook wb = new XSSFWorkbook(fis);
			Sheet ws = wb.getSheet("Sheet1");
			Row Row=ws.getRow(0);     //get my Row which start from 0   
			     
		        int RowNum = ws.getPhysicalNumberOfRows();// count my number of Rows
		        int ColNum= Row.getLastCellNum(); // get last ColNum 
		         
		        Object Data[][]= new Object[RowNum-1][ColNum]; // pass my  count data in array
		        
		        for(int i=0; i<RowNum-1; i++) //Loop work for Rows
		        {  
	                Row row= ws.getRow(i+1);
	                 
	                for (int j=0; j<ColNum; j++) //Loop work for colNum
	                {
	                    if(row==null)
	                        Data[i][j]= "";
	                    else
	                    {
	                        Cell cell= row.getCell(j);
	                        if(cell==null)
	                            Data[i][j]= ""; //if it get Null value it pass no data 
	                        else
	                        {
	                            String value=cell.getStringCellValue();
	                            Data[i][j]=value; //This formatter get my all values as string i.e integer, float all type data value
	                        }
	                    }
	                }
	            }
	 
        System.out.println(Data);
		return Data;
	}
}