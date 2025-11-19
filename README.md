# The Official *Shadows Over Sol 2e* Game System for Foundry Virtual Tabletop
*by Tab Creations LLC*

![Supported Foundry VTT versions](https://img.shields.io/badge/FoundryVTT%20Compatibility-V13-orange)
![Latest Release](https://img.shields.io/github/v/release/tmtabor/sos2e-foundryvtt?label=Latest%20Version)

<!-- <a href="https://www.tabcreations.com/shadows-over-sol/" target="_BLANK"><img src="https://www.tabcreations.com/media/uploads/sos/sos-2e-logo.png" alt="Shadows Over Sol Logo" width="400"/></a> -->

This game system supports and enhances the play experience of [Shadows Over Sol 2e](https://www.tabcreations.com/shadows-over-sol/) in [Foundry Virtual Tabletop](http://foundryvtt.com/).

## Installation Instructions

Once Shadows Over Sol for Foundry Virtual Tabletop reaches its 1.0 release you will be able to install it by navigating to the **Install System** dialog on the Setup menu and installing it from there. However, until its 1.0 release, you must do a manual install.

### Install the Latest Release From Github

Open Foundry and go to Game Systems -> Install System. In the Manifest URL field at the bottom of the dialog, insert the following: `https://github.com/tmtabor/sos2e-foundryvtt/releases/download/latest/system.json`

Alternatively, You may do this by downloading a zip archive from the [Releases Page](https://github.com/tmtabor/sos2e-foundryvtt/releases).

### Install the Latest Development Code

If you wish to manually install the latest development code, clone this repository into the `Data/systems/sos2e` folder using the following command: `git clone https://github.com/tmtabor/sos2e-foundryvtt.git`. 

## Current State

Shadows Over Sol 2e for Foundry Virtual Tabletop is currently in a "beta" state of development. The code is mostly feature complete, but merits further testing and some user interface improvements before its 1.0 release.

## Development

Changes need to be made to the source code and then transpiled to a minified state using parcel. A run target has been added to make this easier.

> npm run build

## Notable Features

- Test margin and damage calculation that takes into account size, weapons, armor and traits.
- Inventory management with support for dragging and dropping items into containers, as well as the calculation of total encumbrance.
- Ability to edit and recalculate test results!
- Easily track Defense, Willpower, fast turns and slow turns in combat.
- Automated consequences! Just drag and drop onto the character sheet!
- Stat, skill and attack modifiers from traits and items.