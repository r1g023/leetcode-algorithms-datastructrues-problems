
def remove_duplicates(items):
    #create a new list to store the unique items
    unique_items = []
    #iterate over the items in the list
    for item in items:
        #if the item is not in the unique_items list
        if item not in unique_items:
            #add it to the unique_items list
            unique_items.append(item)
    #return the unique items list
    return unique_items