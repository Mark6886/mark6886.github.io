var modalWindow = $.modal("rvwer", "rwrw")

function msg(textI, titleI)
{
    modalWindow = $.modal(titleI, textI)
    modalWindow.open()
}

function modalClose()
{
    modalWindow.close();
}

function csharpWhat() {
   msg('C# — объектно-ориентированный язык программирования. Разработан в 1998—2001 годах группой инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота как язык разработки приложений для платформы Microsoft .NET Framework. ', 'C#')
}
function cppWhat() {
   msg('C++ — компилируемый, статически типизированный язык программирования общего назначения. ', 'C++')
}
function htmlWhat() {
   msg('HTML — стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML.', 'HTML')
}
function cssWhat() {
   msg('CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.', 'CSS')
}
function javaWhat() {
   msg('Java — строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems.', 'Java')
}
function javascriptWhat() {
   msg('JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript.', 'JavaScript')
}
function pythonWhat() {
   msg('Python — высокоуровневый язык программирования общего назначения, ориентированный на повышение производительности разработчика и читаемости кода.', 'Python')
}
function windowsbatchWhat() {
   msg('Пакетный файл — текстовый файл в MS-DOS, OS/2 или Windows, содержащий последовательность команд, предназначенных для исполнения командным интерпретатором Windows Batch.', 'Windows Batch')
}
function bashWhat() {
   msg('Bash — усовершенствованная и модернизированная вариация командной оболочки Bourne shell. Одна из наиболее популярных современных разновидностей командной оболочки UNIX.', 'Bash')
}
function intellijideaWhat(){
   msg('IntelliJ IDEA - средство разработки Java проектов от JetBrains', 'IntelliJ IDEA')
}   
function ideWhat(){
    msg('IDE - это специализированная программа для разработки приложений на определенных языках программирования. Также есть мультиязычные IDE', 'IDE')
}
function myprojects(projId)
{
  if(projId == "browserUnCookie")
  {
    msg('<a href="https://drive.google.com/file/d/1AbjMe_8ZHh9avRO5dwNdTWXCAynQNsMY/view?usp=sharing">Вот</a> ссылка на скачивание', 'Браузер')
  }
}