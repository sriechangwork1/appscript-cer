🏆 ระบบค้นหาและดาวน์โหลดเกียรติบัตรออนไลน์ (Certificate Search & Download System)

ระบบ Web App สำหรับค้นหาและดาวน์โหลดเกียรติบัตรออนไลน์ พัฒนาด้วย Google Apps Script (GAS) เชื่อมต่อฐานข้อมูลจาก Google Sheet แบบ Real-time และรองรับการสร้างภาพเกียรติบัตรพร้อมดาวน์โหลดเป็นไฟล์ PDF อัตโนมัติ

🌟 ฟีเจอร์หลัก (Features)

🔍 ระบบค้นหาอัจฉริยะ: ค้นหาด้วยชื่อ นามสกุล หรือ ID จาก Google Sheet ได้ทันที

📄 สร้าง PDF อัตโนมัติ: วาดตัวหนังสือลงบนภาพพื้นหลังด้วย HTML5 Canvas และแปลงเป็น PDF ด้วย jsPDF

🎨 Responsive Design: แสดงผลสวยงามทั้งบนคอมพิวเตอร์และสมาร์ทโฟน (พัฒนาด้วย Tailwind CSS)

☁️ Serverless: ไม่ต้องเช่าโฮสติ้ง รันฟรีบน Google Apps Script 100%

👤 ส่วนที่ 1: สำหรับผู้ใช้งานทั่วไป (ผู้รับเกียรติบัตร)

การค้นหาและดาวน์โหลดเกียรติบัตรสามารถทำได้ง่ายๆ ผ่านคอมพิวเตอร์และสมาร์ทโฟน โดยทำตามขั้นตอนดังนี้:

เข้าสู่ระบบ: เปิดลิงก์เว็บไซต์ที่ทางผู้จัดงานส่งให้

ค้นหาข้อมูล: - ในช่องค้นหา ให้พิมพ์ "ชื่อ-นามสกุล" หรือ "รหัสประจำตัว" ของท่าน

กดปุ่ม "ค้นหา" (หรือกดปุ่ม Enter บนแป้นพิมพ์)

ตรวจสอบผลลัพธ์: ระบบจะแสดงข้อมูลของท่านขึ้นมาบนหน้าจอ ให้ตรวจสอบความถูกต้องของชื่อและรายละเอียดต่างๆ

ดาวน์โหลดเกียรติบัตร: - คลิกลงบนปุ่มสีน้ำเงิน "สร้างและดาวน์โหลดเกียรติบัตร"

ระบบจะใช้เวลาโหลดสักครู่ (กำลังโหลดฟอนต์และสร้างไฟล์ PDF)

เมื่อเสร็จสิ้น ไฟล์เกียรติบัตรแบบ PDF จะถูกดาวน์โหลดลงในเครื่องของท่านโดยอัตโนมัติ

⚠️ หมายเหตุ: หากค้นหาไม่พบ กรุณาตรวจสอบการสะกดคำ เว้นวรรค หรือลองค้นหาด้วยชื่อเพียงอย่างเดียวโดยไม่ต้องใส่นามสกุล

🛠️ ส่วนที่ 2: สำหรับผู้ดูแลระบบ (Admin)

ส่วนนี้สำหรับผู้ที่มีหน้าที่จัดการรายชื่อและปรับปรุงหน้าตาของเกียรติบัตรในแต่ละรอบกิจกรรม

2.1 การจัดการรายชื่อใน Google Sheet

ระบบนี้ดึงข้อมูลมาจาก Google Sheet โดยตรง หากต้องการเพิ่ม ลบ หรือแก้ไขรายชื่อ ให้ทำใน Google Sheet ได้เลย:

คอลัมน์ชื่อ: ต้องมีคำว่า "ชื่อ" หรือ "Name" อยู่บนหัวคอลัมน์ (ระบบจะดึงข้อมูลจากคอลัมน์นี้ไปพิมพ์ตัวใหญ่ตรงกลางเกียรติบัตร)

คอลัมน์เลขที่: ต้องมีคำว่า "ID" หรือ "เลขที่" อยู่บนหัวคอลัมน์ (ระบบจะดึงไปพิมพ์ตรงมุมขวาบนในรูปแบบ 2569-ID)

เมื่อแก้ไขข้อมูลในตารางเสร็จ ระบบหน้าเว็บจะอัปเดตข้อมูลตามทันทีโดยไม่ต้องทำอะไรเพิ่มเติม

2.2 การเปลี่ยนรูปภาพพื้นหลังเกียรติบัตร

เมื่อมีกิจกรรมใหม่และต้องการเปลี่ยนลายเกียรติบัตร ให้ทำตามขั้นตอนดังนี้:

นำไฟล์ภาพเกียรติบัตร (ไฟล์ .jpg หรือ .png) ไปอัปโหลดไว้ที่ Google Drive หรือเว็บฝากรูป (แนะนำ imgbb.com เพื่อป้องกันปัญหาการบล็อกรูปภาพ)

เข้าไปที่เมนู ส่วนขยาย (Extensions) > Apps Script ใน Google Sheet

ไปที่ไฟล์ Index.html

เลื่อนหาโค้ดส่วนตั้งค่าภาพพื้นหลัง (ประมาณบรรทัดที่ 90):

// หากใช้ Google Drive ให้เปลี่ยนรหัส ID ตรงนี้
var GOOGLE_DRIVE_ID = 'ใส่_ID_รูปภาพใหม่ตรงนี้';

// หรือหากใช้ลิงก์จากเว็บฝากรูปอื่นๆ (แนะนำ) ให้ใช้แบบนี้ (ลบเครื่องหมาย // ด้านหน้าออก)
// var BACKGROUND_IMAGE_URL = '[https://i.ibb.co/xxxx/certificate.jpg](https://i.ibb.co/xxxx/certificate.jpg)';

ตัวอย่างลิงค์พื้นหลังเกียรติบัตร โยนขึ้น google drive แล้ว share file มา
https://drive.google.com/file/d/1-tStxw0OaFglIEOiageDqlXa7gr2AsuF/view


เมื่อแก้ไขเสร็จ ให้กด บันทึก (Save) และทำตามขั้นตอนที่ 2.3

2.3 การอัปเดตระบบให้คนอื่นเห็น (Deploy)

สำคัญมาก: ทุกครั้งที่มีการเข้าไปแก้ไขโค้ดใน Apps Script ท่านต้องกดอัปเดตเวอร์ชันเสมอ:

ที่มุมขวาบนของ Apps Script กดปุ่ม การทำให้ใช้งานได้ (Deploy)

เลือก จัดการการทำให้ใช้งานได้ (Manage deployments)

คลิกไอคอน รูปดินสอ (แก้ไข) ที่รายการเดิม

ในช่อง เวอร์ชัน (Version) ให้เลือกเปลี่ยนเป็น "เวอร์ชันใหม่" (New version)

กดปุ่ม การทำให้ใช้งานได้ (Deploy)

🚀 ส่วนที่ 3: การติดตั้งระบบครั้งแรก (Installation)

สำหรับผู้ที่ต้องการนำ Source Code ไปสร้างระบบนี้ขึ้นมาใหม่ในบัญชี Google ของตนเอง ให้ทำตามขั้นตอนดังนี้:

สร้าง Google Sheet ใหม่ และเตรียมข้อมูล (แถวแรกเป็นหัวข้อ เช่น ชื่อ, นามสกุล, ID)

ไปที่เมนู แชร์ (Share) ตั้งค่าให้เป็น ทุกคนที่มีลิงก์ (Anyone with the link) เป็น ผู้มีสิทธิ์อ่าน (Viewer)

ไปที่เมนู ส่วนขยาย (Extensions) > Apps Script

จะพบไฟล์ชื่อ รหัส.gs หรือ Code.gs ให้คัดลอกโค้ดด้านล่างนี้ไปวางทับทั้งหมด (อย่าลืมเปลี่ยน SHEET_ID เป็นของคุณเอง)

📝 ไฟล์: Code.gs

// กำหนด ID ของ Google Sheet ที่ต้องการดึงข้อมูล (เอามาจาก URL ของ Sheet)
const SHEET_ID = 'ใส่_ID_GOOGLE_SHEET_ของคุณที่นี่';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('ระบบค้นหาและดาวน์โหลดเกียรติบัตร')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function searchCertificate(searchTerm) {
  if (!searchTerm || searchTerm.trim() === '') return [];
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheets()[0];
    const data = sheet.getDataRange().getDisplayValues();
    if (data.length <= 1) return [];

    const headers = data[0];
    const results = [];
    const lowerSearchTerm = searchTerm.toLowerCase().trim();

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const isMatch = row.some(cell => cell.toLowerCase().includes(lowerSearchTerm));
      if (isMatch) {
        let rowData = {};
        headers.forEach((header, index) => {
           if(header.trim() !== '') rowData[header] = row[index];
        });
        results.push(rowData);
      }
    }
    return results;
  } catch (error) {
    throw new Error('ไม่สามารถเข้าถึงข้อมูลใน Google Sheet ได้ โปรดตรวจสอบการตั้งค่าการแชร์ Sheet');
  }
}


กดปุ่ม + เพิ่มไฟล์ เลือก HTML ตั้งชื่อไฟล์ว่า Index (ต้องเป็นตัว I พิมพ์ใหญ่)

คัดลอกโค้ดด้านล่างนี้ไปวางทับในไฟล์ Index.html

📝 ไฟล์: Index.html

<!DOCTYPE html>
<html lang="th">
<head>
  <base target="_top">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ระบบค้นหาและดาวน์โหลดเกียรติบัตร</title>
  
  <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
  <link href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css)" rel="stylesheet">
  <link href="[https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap)" rel="stylesheet">
  <script src="[https://cdn.jsdelivr.net/npm/sweetalert2@11](https://cdn.jsdelivr.net/npm/sweetalert2@11)"></script>
  <script src="[https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)"></script>
  
  <style>
    body { font-family: 'Sarabun', sans-serif; background-color: #f0fdfa; }
  </style>
</head>
<body class="min-h-screen py-10 px-4">
  <div class="max-w-3xl mx-auto">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="bg-gradient-to-r from-teal-500 to-blue-600 p-6 text-center">
        <h1 class="text-3xl font-bold text-white mb-2"><i class="fas fa-award mr-2"></i> ระบบค้นหาเกียรติบัตร</h1>
        <p class="text-teal-100">พิมพ์ชื่อ-สกุล หรือข้อมูลที่ต้องการเพื่อค้นหาเกียรติบัตรของคุณ</p>
      </div>
      <div class="p-6 md:p-8">
        <div class="flex flex-col md:flex-row gap-3 mb-6">
          <div class="relative flex-grow">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i class="fas fa-search text-gray-400"></i>
            </div>
            <input type="text" id="searchInput" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow text-lg" placeholder="ระบุคำค้นหา...">
          </div>
          <button id="searchBtn" class="bg-teal-600 text-white px-8 py-3 rounded-xl hover:bg-teal-700 transition duration-200 font-medium flex items-center justify-center gap-2 shadow-md">ค้นหา</button>
        </div>
        <div id="loading" class="hidden text-center py-8">
          <i class="fas fa-circle-notch fa-spin text-4xl text-teal-500 mb-3"></i>
          <p class="text-gray-500 font-medium">กำลังสืบค้นข้อมูล กรุณารอสักครู่...</p>
        </div>
        <div id="results" class="space-y-4"></div>
      </div>
    </div>
    <div class="text-center mt-6 text-gray-500 text-sm"><p>&copy; ระบบค้นหาและดาวน์โหลดเกียรติบัตรออนไลน์</p></div>
  </div>

  <script>
    var GOOGLE_DRIVE_ID = '196u70ZLAqVWXzUbOwTWMEHbCq6Io2vua'; // เปลี่ยน ID รูปพื้นหลังที่นี่
    var BACKGROUND_IMAGE_URL = '[https://lh3.googleusercontent.com/d/](https://lh3.googleusercontent.com/d/)' + GOOGLE_DRIVE_ID;

    window.executeSearch = function() {
      var searchInput = document.getElementById('searchInput');
      var searchTerm = searchInput ? searchInput.value : '';
      if(!searchTerm) return Swal.fire('แจ้งเตือน', 'กรุณาระบุคำค้นหา', 'warning');
      if (typeof google === 'undefined') return Swal.fire({icon: 'error', title: 'ข้อผิดพลาด', text: 'โปรดใช้งานผ่านลิงก์ Web App'});

      document.getElementById('loading').classList.remove('hidden');
      document.getElementById('results').innerHTML = '';
      google.script.run.withSuccessHandler(displayResults).withFailureHandler(showError).searchCertificate(searchTerm);
    };

    function displayResults(data) {
      document.getElementById('loading').classList.add('hidden');
      var resultsDiv = document.getElementById('results');
      if(!data || data.length === 0) return resultsDiv.innerHTML = '<div class="bg-red-50 text-red-600 p-6 text-center rounded-xl">ไม่พบข้อมูล</div>';

      var html = '';
      data.forEach(function(item, index) {
        var detailsHtml = '', title = '', certId = '', firstNonUrl = '';
        for (var key in item) {
          if (item.hasOwnProperty(key)) {
            var lowerKey = key.toLowerCase().trim();
            if (!title && (lowerKey.indexOf('ชื่อ') !== -1 || lowerKey.indexOf('name') !== -1)) title = item[key];
            if (lowerKey === 'id' || lowerKey.indexOf('เลขที่') !== -1) certId = item[key];
          }
        }
        for (var key in item) {
          if (item.hasOwnProperty(key)) {
            var value = item[key];
            if (!value || value.toString().trim() === '') continue; 
            var strValue = value.toString();
            var isUrl = strValue.startsWith('http://') || strValue.startsWith('https://');
            if (!isUrl && !firstNonUrl) firstNonUrl = strValue;
            if (isUrl) continue;
            detailsHtml += '<div class="py-1.5 border-b border-gray-100"><span class="text-gray-500 mr-2">' + key + ':</span><span class="font-medium">' + value + '</span></div>';
          }
        }
        if (!title) title = firstNonUrl;
        var safeTitle = title ? title.replace(/'/g, "\\'") : '';
        var safeId = certId ? certId.toString().replace(/'/g, "\\'") : '';

        html += '<div class="bg-white border rounded-xl p-5 mb-4 hover:shadow-lg"><h3 class="text-xl font-bold mb-3">' + (title || 'ข้อมูลผู้รับ') + '</h3><div class="mb-4">' + detailsHtml + '</div><button onclick="window.downloadCert(\'' + safeTitle + '\', \'' + safeId + '\')" class="bg-blue-600 text-white px-6 py-2 rounded-lg"><i class="fas fa-image mr-2"></i> สร้างและดาวน์โหลดเกียรติบัตร (PDF)</button></div>';
      });
      resultsDiv.innerHTML = html;
    }

    window.downloadCert = function(name, certId) {
      Swal.fire({title: 'กำลังสร้างเกียรติบัตร...', allowOutsideClick: false, didOpen: () => Swal.showLoading()});
      document.fonts.ready.then(function() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.crossOrigin = "Anonymous"; 
        img.src = BACKGROUND_IMAGE_URL;
        
        img.onload = function() {
          canvas.width = img.width; canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          
          ctx.font = "bold 60px 'Sarabun'"; ctx.fillStyle = "#0f172a"; ctx.textAlign = "center"; 
          ctx.fillText(name, canvas.width / 2, canvas.height * 0.38);

          if (certId) {
              ctx.font = "bold 26px 'Sarabun'"; ctx.fillStyle = "#CE2626"; ctx.textAlign = "center"; 
              ctx.fillText('2569-' + certId, canvas.width * 0.89, canvas.height * 0.082);
          }
          try {
            var dataURL = canvas.toDataURL("image/jpeg", 1.0);
            var { jsPDF } = window.jspdf;
            var pdf = new jsPDF({orientation: canvas.width > canvas.height ? 'l' : 'p', unit: 'px', format: [canvas.width, canvas.height]});
            pdf.addImage(dataURL, 'JPEG', 0, 0, canvas.width, canvas.height);
            pdf.save('เกียรติบัตร_' + name + '.pdf');
            Swal.fire({icon: 'success', title: 'สร้างสำเร็จ!', showConfirmButton: false, timer: 2000});
          } catch (e) { Swal.fire('Error', 'ไม่สามารถบันทึกภาพได้ โปรดใช้ลิงก์ฝากรูป imgbb.com แทน Google Drive', 'error'); }
        };
        img.onerror = function() { Swal.fire('Error', 'ไม่สามารถโหลดภาพพื้นหลังได้', 'error'); };
      });
    };

    document.addEventListener('DOMContentLoaded', function() {
      var btn = document.getElementById('searchBtn'), inp = document.getElementById('searchInput');
      if(btn) btn.addEventListener('click', window.executeSearch);
      if(inp) inp.addEventListener('keypress', e => { if(e.key === 'Enter') window.executeSearch(); });
    });
  </script>
</body>
</html>


บันทึกโปรเจกต์ (คลิกรูปแผ่นดิสก์)

กดปุ่ม การทำให้ใช้งานได้ (Deploy) > การทำให้ใช้งานได้รายการใหม่ (New deployment)

เลือกประเภทเป็น แอปพลิเคชันเว็บ (Web app) กำหนดสิทธิ์การเข้าถึงเป็น ทุกคน (Anyone) และกด Deploy จะได้ลิงก์ Web App สำหรับส่งให้ผู้ใช้งาน
