Throttling 

- is a technique that limits how often a function can run.
    It ensures the function runs at most once in a given time interval — even if an event is triggered repeatedly.

- Even if the scroll event fires many times per second, logScroll() will be executed only once every 500ms.
====================================================================================================
Throttling vs Debouncing:

Feature	    Debounce	                         Throttle
Execution	After user stops triggering	         At fixed intervals
Best for	Search input typing	                 Scrolling, dragging, resizing

====================================================================================================

| Technique    | Analogy                                |
| ------------ | -------------------------------------- |
| **Debounce** | "Wait until they finish talking."      |
| **Throttle** | "Let them talk once every 10 seconds." |

====================================================================================================

Quick Rule to remember to when to use:

✔ Debounce → when you want the final result
✔ Throttle → when you want periodic/continuous control

====================================================================================================

Debounce is used when the final action matters — like search suggestion API calls on Google or filter updates on Amazon.
Throttle is used when continuous updates matter but need control — like scroll handling on Instagram feed or dragging in Google Maps.

====================================================================================================

(Throttle example):

| Question                                 | Answer              |
| ---------------------------------------- | ------------------- |
| Does `lastCall` reset to 0 on each call? | ❌ No                |
| How many times is it 0?                  | Only once initially |
| What keeps the updated value alive?      | Closure             |

====================================================================================================
