# Lab 3 : Motion sensor

## Requirements

- Must use sensor interrupt : motion detection.
  - When you shake your board, it will trigger the interrupt.
- Please use the deferred interrupt handling task.
  - Use semaphore.
  - ISR will give the semaphore and the handler task enters the running state.
- At the beginning, the green LED blinking, then shake the board, the red LED triggered（switch state） by ISR and the orange LED blinking five times in handler task.
- When orange LED blinking, you should not trigger the sensor interrupt if you shake the board.

## Implement flow

### HackMD

https://hackmd.io/@Yu-Lin/embedded-system-lab3

## Demo

https://github.com/user-attachments/assets/2e2e98e7-cdc0-44d9-af67-9771a7d9b561
