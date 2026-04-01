// กำหนด ID ของ Google Sheet ที่ต้องการดึงข้อมูล
const SHEET_ID = '1x71a0m5Q0OfJVHJVfiDiOVQDBGwjCG5mtJuwm9o8LCs';// google sheet id 

// ฟังก์ชันหลักสำหรับเปิดหน้าเว็บ
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('ระบบค้นหาและดาวน์โหลดเกียรติบัตร')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ฟังก์ชันสำหรับค้นหาข้อมูล (ถูกเรียกจากฝั่ง HTML)
function searchCertificate(searchTerm) {
  if (!searchTerm || searchTerm.trim() === '') return [];

  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheets()[0]; // ดึงข้อมูลจากชีตแรกเสมอ
    const data = sheet.getDataRange().getDisplayValues();

    if (data.length <= 1) return []; // ไม่มีข้อมูล (มีแค่หัวข้อ)

    const headers = data[0];
    const results = [];
    const lowerSearchTerm = searchTerm.toLowerCase().trim();

    // เริ่มค้นหาตั้งแต่แถวที่ 2 (index 1) เป็นต้นไป
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      
      // ตรวจสอบว่ามีคำค้นหาอยู่ในเซลล์ใดเซลล์หนึ่งของแถวนี้หรือไม่
      const isMatch = row.some(cell => cell.toLowerCase().includes(lowerSearchTerm));

      if (isMatch) {
        let rowData = {};
        // จับคู่ข้อมูลกับหัวคอลัมน์ (Header)
        headers.forEach((header, index) => {
           // เก็บเฉพาะคอลัมน์ที่มีชื่อหัวข้อ
           if(header.trim() !== '') {
             rowData[header] = row[index];
           }
        });
        results.push(rowData);
      }
    }
    
    return results;
  } catch (error) {
    throw new Error('ไม่สามารถเข้าถึงข้อมูลใน Google Sheet ได้ โปรดตรวจสอบการตั้งค่าการแชร์ Sheet');
  }
}
