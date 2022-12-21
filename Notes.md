19/12-22

Vi har under eftermiddagen träffats i vårat första möta angånde den nya uppgiften Biografen. Där vi b.la. skapat repot för uppgiften där vi kommer jobba.

Beslut som fattas:

- Biografen kommer befinna sig i Luleå

- Kommer använda något utav våra tidigare ESC Hacker projekt som grund för den responsiva layouten.

- Projektverktyg: GitHub Projects.​

- Tekniker: Html, CSS (SASS) och Javascript

- Bestämt att vi gemensamt sätta oss under Sprint Zero för att strukturera vad som behöver göras och bryta ner projektet enligt WBS för att sedan bli mer detaljerad.


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

# bokningssida/modal
    styling
    innehåll


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

