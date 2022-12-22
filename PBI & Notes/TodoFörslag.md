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


# Main-Nav (epic)

* Öppetidder&kontakt *S* 

* About *S*

* TicketInfo  *S*

* Newsletter *S*

* Giftcards *L*

* SocialMedia-links *M*


# Second-Nav (epic)

* Repertoire *L*

* Salons *L*

* SpecialShowings *L*

* LiveBio *L*

* Bar&Bistro *L*

* Search *L*


# Section-Hero (epic) 




* styling filmCard (Gäller både för section-Now och section-Soon, 
  # if (desktopLäge) {sectionNow = stortKort, sectionSoon = litetKort} 
  # else if (mobileLäge) {sectionNow, sectionSoon = litetKort}
  } ) 

# Section-Now (epic)

* styling & grid

* rendering av filmCard (outer container <div> -> with <a> element (clickAble to come to booking))

* card booking (when clicking card, you come to a new for site for booking)


# Section-Soon (epic) 

