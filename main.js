// =============================== Q#1 ======================================
// ============================== STEP#1 =====================================
var myWork = [];
// ============================ STEP#2 =======================================
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 1
    };
    // ========================== STEP#3 =========================================
    myWork.push(lesson);
}
// ======================== STEP#4 ===========================================
console.log(myWork);
