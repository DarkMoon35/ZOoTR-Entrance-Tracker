
# Ocarina of Time Randomizer Entrance Tracker

## Disclaimer
I do not possess or claim this code. It fully belongs to brakkum. Everything I add or want to add to brakkum's work is with his approval, and falls under the original code's license.
Don't forget that it is a project, I do not pretend it will go through its end, but I will do what I can.

## Motive for this fork
Roman's ZOoTR fork adds several options to Entrance Randomizer.

One of them is the ability to disjoin entries, so that they are non-bidirectional after that. What does it mean?
Let's take an example. You are in Link's House, and go out. Entrance Randomizer warps you in, say, Temple of Time entrance (out of ToT).
If you go in the Temple of Time, you can't be sure you will be warped in Link's House. You might be warped to another location of the same pool, like Talon's House.
You can never be sure you will be able to come back soon to the place you are in, if you pass through any Entrance. But of course, it is locked this way, it won't change halfway of the playthrough. You will simply have:
- Link's House -> Kokiri Forest = Temple of Time Entrance
- Temple of Time Entrance -> Temple of Time = Talon's House

This option changes the way brakkum's Router has to work to take this option in account.

Now, there is a second option in Roman's fork that changes the way brakkum's work could do the job: mixed pools. What does it mean?
Let's take another example. You are in Link's House (again). You go out to Kokiri Forest, but it makes you enter the Hyrule Fields.
This one is easier to understand: every Entrance can lead to any other Entrance. You could enter the Forest and be warped in Zora's Domain.

I wish to do a full tracker based on brakkum's awesome work that takes those two elements. But they won't be optional, it will be the way it will work.
So: when you will click on a combobox to select the destination of the Entrance, there will be many options... I will change that too, comboboxes will be changed into text fields with completion suggestions.

## Why isn't it a branch that will be merged into brakkum's work once it's done?
Because right now I don't think brakkum's tracker and brakkum's Roman's-ER-compatible tracker v0.1 would be easily compatible. But this is a matter that will be discussed afterwards :)

## Original tracker information
**https://tracker.brakke.dev/**

**https://github.com/brakkum/ZOoTR-Entrance-Tracker**
## How to use

The tracker is pretty simple to use. When you first visit, you'll be prompted for the location of Link's House or the Temple of Time (depending on if you start as Child or Adult).
Once you add that, the area you selected will pop up, and the entrances available will be listed.
From there you can select where different entrances lead.

For locations where progress may not be possible on first visit, a border is used around the location.
Clicking on the name of the location toggles the border between red and green.
This is just an easy visual reminder to keep track of locations to revisit.

After you've explored some areas, you can use the route finder.
Click on 'Show Route Finder' in the top navbar to open it.
Just select a start location and an end, and the tracker will show the shortest routes to get there.
For locations that are a single entity, such as overworld areas or dungeons, a single route will be returned.
For locations that have multiple instances, such as grottos or some houses, the routes to all the discovered locations will be returned.
There are a few options as well that are located underneath the selection boxes, to try and help avoid some issues that may arise based on location and Link's age.

The naming of some locations in the option menus may be misleading at first.
For example in the Kokiri Forest area, the names of all the houses are explicitly labeled.
But, when selecting interiors for houses, these are all just labeled generically as 'House'.
This is done so that houses without any important progress items are not cluttering the options.

When a warp song is collected, click on its name in the bottom navbar.
This will allow the route finder to take songs into consideration, and open their areas in the tracker.

Similarly to when the tracker is first opened, there are a few prompts that can occur.
When Dampe's Grave is accessed, if the Windmill has not yet been found, the user will be prompted for where it exits to.
Also, when the user collects the Prelude of Light, if the Temple of Time has not been accessed yet, the user will also be prompted then.

Progress is automatically saved to your browsers local storage.
However, this does mean that if you clear your browsing history your progress will be lost.
Resetting the tracker to default start is done by clicking 'Reset' in the top navbar.

## How to help

The tracker is built entirely with React/JavaScript. All you have to do is run these steps in your console:
```
git clone https://github.com/brakkum/ZOoTR-Entrance-Tracker.git zootr-entrance-tracker
cd zootr-entrance-tracker
npm install
npm start
```
After that you should be good to go.
Please feel free to fork, open issues and pull requests, and submit feedback on GitHub.
