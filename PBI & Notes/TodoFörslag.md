## TODOS


# Figma design 
    *burak*
# startsida HTML
    
    HEADER
    MAIN NAV
    SECOND NAV
    SECTION "Hero"
    SECTION "NOW"
    SECTION "SOON"

    FOOTER

# startsida SCSS
    Mobile first!
        *breakpointvariabler* 750px*
    --------------------------------
    main.scss

    Header
    Section "now"
    Section "soon"
    Footer

    movieCard (s)

# bokningssida/modal *L* - *XL*
    Show seating plan
     - Get JSON file with info about chairs and current booking status
     - Update UI with already reserved seats and possibly other info such as wheelchair accessible seats etc according to JSON file 
    User selects seats
     - Update UI according to user selection
    User select tickettype
     - List available tickettypes and prices and also plus/minus signs to add or remove from cart
    Summary of selected options
     - Text only, selected seats, selected tickettypes price per ticket and sumary
    Enter some information to be able to proceed purchase
     - Fields with neccessary informnation to be able to proceed with booking
    purchase button
     - Activated when all neccessary fields are filled in


*S* = Small
*M* = Medium
*L* = Large


# Main-Nav *M* 



# Second-Nav (epic)

* Repertoire *L*

* Salons *L*

* SpecialShowings *L*

* LiveBio *L*

* Bar&Bistro *L*

* Search *L*


# Section-Hero (epic) 

* Bildvisning



* styling filmCard (Gäller både för section-Now och section-Soon, 
  # if (desktopLäge) {sectionNow = stortKort, sectionSoon = litetKort} 
  # else if (mobileLäge) {sectionNow, sectionSoon = litetKort}
  } ) 

# Section-Now / # Section-Soon (epic)

* styling & grid *M*

* rendering av filmCard (outer container <div> -> with <a> element (clickAble to come to booking)) *M*

* card booking (when clicking card, you come to a new for site for booking) *M*


# Bar & Bistro (Food/Drink related things)

    - As a user i want to find content on the site aboout food and drinks

* Page containing menu options

    - As a user I want to know how to book a table.

    - As a user I want to see what food options are available. 
    (A la carte, specials, bistro)

    - As a user i want to be able to tell what food items are vegan.

* Page containing Special events(Friday Premiere)
*Moviequiz

    - As a user I want to know if there are any special events connected to food/drinks and what they are. 


