@echo off
powershell -Command "Start-Process cmd -ArgumentList '/s,/k,pushd D:\Users\Ian\Desktop\NOVA\my-app && npm start' -Verb RunAs"
