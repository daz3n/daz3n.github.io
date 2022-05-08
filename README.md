# Particle Engine
### Engine
![](https://via.placeholder.com/800x300.png?text=Placeholder+Image)
***

# Particle Collider
### Editor
![](https://via.placeholder.com/800x300.png?text=Placeholder+Image)
***

# Particle
### Plugin
![](https://via.placeholder.com/800x300.png?text=Placeholder+Image)
***
# Goals
 - faster physics
 - better graphics
 - less graphics restrictions
 - less memory requirements

### Options
options for *that* sparse set:
 - shrink it? - probably the best bet - fast, simple. need to stay aware though.
 - update to an unordered map? - even larger memory requirement per element. banking on staying small
 - implement a virtual memory system? - too complex, too slow to implement, too slow during runtime, too error prone

options for sync:
 - spin locks. ew.
 - mutexes / atomics. slower. reliable and portable.
 - introduce fibers. i need to see if this is portable first. potentially wait free.
 
