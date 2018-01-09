@echo off
Setlocal enabledelayedexpansion

Set "Pattern=T"
Set "Replace=t"

For %%a in (*.png) Do (
    Set "File=%%~a"
    Ren "%%a" "!File:%Pattern%=%Replace%!"
)

Pause&Exit