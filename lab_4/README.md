# Lab 4 : Memory Management

## Requirements

### Part 1

- Implement your `vPrintFreeList` function in `heap_2.c`.
- Task print_task should print the correct free block list to console through **UART**.
- `vPrintFreeList`
  - Print the information of **StartAddress**, **heapSTRUCT_SIZE**, **xBlockSize** and **EndAddress** through UART.
  - The free blocks are sorted by their size in ascending order.

### Part 2

- Modify `prvInsertBlockIntoFreeList` macro in `heap_2.c` to implement memory merge.
- After merging the adjacent free blocks, the free blocks should still be sorted in ascending order based on their size.

- `prvInsertBlockIntoFreeList`
  - Contiguous blocks will be merged into bigger block.
  - The list of free blocks is ordered by their size in ascending order

    ![image](https://hackmd.io/_uploads/rkojv-Axlg.png)
    ![image](https://hackmd.io/_uploads/Sy5ok8Rlxe.png)

## Implement flow

### HackMD

https://hackmd.io/@Yu-Lin/embedded-system-lab4

## Demo

Part1:
![image](.\Demo\part_1_demo.png)

Part2:
![image](.\Demo\part_2_demo.png)
