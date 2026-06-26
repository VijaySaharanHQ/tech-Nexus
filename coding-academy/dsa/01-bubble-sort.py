"""
Bubble Sort Algorithm

How it works:
Think of air bubbles rising to the surface of water. 
Bubble Sort compares two side-by-side numbers in a list. If the number on the left 
is bigger than the number on the right, it swaps them. It keeps doing this, 
pushing the largest numbers to the end of the list, until the whole list is sorted.
"""

def bubble_sort(arr):
    # Get the total number of items in the list
    n = len(arr)
    
    # The outer loop keeps track of how many times we've gone through the list.
    # We need to go through it 'n' times to ensure every number is sorted.
    for i in range(n):
        
        # We create a flag to check if we actually swapped anything on this pass.
        # If we go through the list and don't swap anything, it means the list 
        # is already sorted, and we can stop early! (This makes the code faster).
        swapped = False
        
        # The inner loop actually does the comparing.
        # We use 'n - i - 1' because with every pass, the biggest numbers 
        # are already pushed to the very end, so we don't need to check them again.
        for j in range(0, n - i - 1):
            
            # Compare the current number with the one directly to its right
            if arr[j] > arr[j + 1]:
                
                # They are out of order! Let's swap them.
                # In Python, you can swap two variables easily like this:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                
                # We made a swap, so we update our flag
                swapped = True
                
        # If no two numbers were swapped by the inner loop, the list is completely sorted.
        if not swapped:
            break
            
    return arr

# --- Testing the Algorithm ---
# This block of code only runs if this script is executed directly.
if __name__ == "__main__":
    
    # Let's create a messy, unsorted list of numbers
    my_list = [64, 34, 25, 12, 22, 11, 90]
    
    print("Unsorted list:", my_list)
    
    # We call our function and pass our messy list into it
    sorted_list = bubble_sort(my_list)
    
    print("Sorted list:  ", sorted_list)
