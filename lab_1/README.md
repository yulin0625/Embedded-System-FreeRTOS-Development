# Lab 1 : MultiTasking and Inter-Task Communication (ITC)

## Requirements

- Must using MultiTask, with Inter-Task Communication (ITC) mechanism
- Two Tasks: **LED-task** and **Button-task**
- **LED-task** will have two states (S1, S2)
  - **S1**: First, the **Red** LED lights up for **1** second, followed by the **Orange** LED lighting up for **1** second (with the Red LED turned off), then the **Green** LED lights up for **1** second (with both the Red and Orange LEDs turned off). This sequence repeats, cycling through the Red, Orange, and Green LEDs.
  - **S2**: Only Orange LED is blinking (2 second ON, 2 second OFF, …).
- **Button-task**: If the button is pressed, the LED-task will switch to another state (S1→S2).
  - Debounce handling
  - Edge detection handling

## Implement flow

### HackMD

https://hackmd.io/@Yu-Lin/embedded-system-lab1