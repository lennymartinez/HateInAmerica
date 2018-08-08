# afam-yoy-crimes

* **Headline:** Hate crimes against black Americans reported in {{ include.year }}

* **Subhed:** Between 2012 and 2016, 16.6 million black Americans on average lived in a county that reported no anti-black hate crimes.

* [TODO] Separate the headline and subhead from the map and add in a dropdown to change the year

* New Scale has been added to JS file:
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: '#FFFFFF' //A10D03
                    }, {
                        from: 1,
                        to: 9,
                        color: 'rgba(161, 13, 3, .1)'
                    }, {
                        from: 10,
                        to: 19,
                        color: 'rgba(161, 13, 3, .2)'
                    }, {
                        from: 20,
                        to: 29,
                        color: 'rgba(161, 13, 3, .3)'
                    }, {
                        from: 30,
                        to: 39,
                        color: 'rgba(161, 13, 3, .4)'
                    }, {
                        from: 40,
                        to: 49,
                        color: 'rgba(161, 13, 3, .5)'
                    }, {
                        from: 50,
                        to: 59,
                        color: 'rgba(161, 13, 3, .6)'
                    },  {
                        from: 60,
                        to: 69,
                        color: 'rgba(161, 13, 3, .7)'
                    }, {
                        from: 70,
                        to: 79,
                        color: 'rgba(161, 13, 3, .8)'
                    }, {
                        from: 80,
                        to: 89,
                        color: 'rgba(161, 13, 3, .9)'
                    }, {
                        from: 90,
                        to: 150,
                        color: 'rgba(161, 13, 3, 1)'
                    }]
                }


# fed-state-laws

* [ ] Pass updated data from Spreadsheet
* [ ] Make sure any state have numbers in the tooltip.
* [ ] Finalize Headline
* [ ] Finalize subhead

# top18

* [ ] Finalize Headline
* [ ] Finalize subhead
* [ ] Standardize names of each school

# 10yrhategrowth

* [x] Finalize Headline
* [ ] Finalize subhead
* [ ] Can we make the lines thicker?

# afam-yoy-crimes

* [ ] Finalize Headline
* [ ] Finalize subhead


# indigenous women 
* **HEAD:** Missing Indigenous Women
* **Subhead:** Records from the National Crime Information Center are some of most telling numbers showing the missing indigenous women's crisis. Some states, such as Washington, are better at tracking at recording their missing peoples.  
* [x] Can we move the head and subhead outside of the map and do something similar with the year as we do with the black american map
* Have to remove Purged and Active from the tool tip
* Change tooltip to say "<b>{point.name}</b><br/>&nbsp;<b>Missing Indigenous women:</b>&nbsp;{point.value}"
* New color scale: 
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: '#FFFFFF' //A10D03
                    }, {
                        from: 1,
                        to: 70,
                        color: 'rgba(161, 13, 3, .1)'
                    }, {
                        from: 71,
                        to: 140,
                        color: 'rgba(161, 13, 3, .2)'
                    }, {
                        from: 141,
                        to: 210,
                        color: 'rgba(161, 13, 3, .3)'
                    }, {
                        from: 211,
                        to: 280,
                        color: 'rgba(161, 13, 3, .4)'
                    }, {
                        from: 281,
                        to: 350,
                        color: 'rgba(161, 13, 3, .5)'
                    }, {
                        from: 351,
                        to: 420,
                        color: 'rgba(161, 13, 3, .6)'
                    }, {
                        from: 421,
                        to: 490,
                        color: 'rgba(161, 13, 3, .7)'
                    }, {
                        from: 491,
                        to: 560,
                        color: 'rgba(161, 13, 3, .8)'
                    }, {
                        from: 561,
                        to: 630,
                        color: 'rgba(161, 13, 3, .9)'
                    }, {
                        from: 631,
                        to: 700,
                        color: 'rgba(161, 13, 3, 1)'
                    }]