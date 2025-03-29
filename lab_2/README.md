# Lab 2 : TaskMonitor

## Requirements

- Create four task (不用自己寫)
  - Red_LED_App
  - Green_LED_App
  - Delay_App
  - TaskMonitor_App
- TaskMonitor_App will call Taskmonitor() periodicity
- TaskMonitor()
  - Traverse ReadyTaskList, DelayedTaskList, OverflowDelayedTaskList
  - Print TCB information by UART
    - Task Name、Priority(Base/actual)、Stack Pointer、Topofstack Pointer、Task State

## Implement flow

### HackMD

https://hackmd.io/@Yu-Lin/embedded-system-lab2

## Demo

[Demo video](./demo/lab2_demo.mp4)