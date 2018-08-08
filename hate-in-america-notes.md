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

* **Headline:** Which state offer the most comprehensive protections against hate crimes. 

* **Subhed:** Louisiana 

* This data has to be updated
* New text for Utah: "Although Utah has a law criminalizing hate crimes, it is the only state law <br>that does not name targeted characteristics such as<br> race, religion or sexual orientation."
* Louisiana still has numbers showing up in the tooltip
* New color cale:
		dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF'
                }, {
                    from: 0.1,
                    to: 1.9,
                    color: 'rgba(161, 13, 3, .1)'
                }, {
                    from: 2,
                    to: 3.9,
                    color: 'rgba(161, 13, 3, .3)'
                }, {
                    from: 4,
                    to: 5.9,
                    color: 'rgba(161, 13, 3, .4)'
                }, {
                    from: 6,
                    to: 7.9,
                    color: 'rgba(161, 13, 3, .5)'
                }, {
                    from: 8,
                    to: 9.9,
                    color: 'rgba(161, 13, 3, .7)'
                }, {
                    from: 10,
                    to: 10.9,
                    color: 'rgba(161, 13, 3, .8)'
                }, {
                    from: 11,
                    to: 12,
                    color: 'rgba(161, 13, 3, 1)'
                }]


# top18

* **HEAD:** Hate crimes reported by universities in 2015, 2016

* **SubHead:** Ohio State University experienced the largest increase in reported hate crimes, going from 4 hate crimes in 2015to 32 hate crimes in 2016

* Color for 2015: #171717
* Color for 2016: #A10D03
* Can we make the bars 2-3 points thicker?
* Change the y-axis tick interval to 5

# 10yrhategrowth

* **Head:** Hate crimes reported by universities since 2005.
* **SubHead:** Reported hate crimes have seen a 2854.5% increase since 2005. In year 2016, the number of reported hate crimes was 1,300. This is based on 6,506 institutions with 11,260 campuses. The crime data reported by the institutions have not been subjected to independent verification by the U.S. Department of Education. Therefore, the Department cannot vouch for the accuracy of the data reported here.'
* Can we make the lin


# indigenous women 
* **HEAD:** Missing Indigenous Women
* **Subhead:** Records from the National Crime Information Center are some of most telling numbers showing the missing indigenous women's crisis. Some states, such as Washington, are better at tracking at recording their missing peoples.  
* Can we move the head and subhead outside of the map and do something similar with the year as we do with the black american map
* Need a new hover color for this graphic, we can't use the red. I think: 'rgba(161, 13, 3, .3)' is good. 
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
                        color: 'rgba(23, 23, 23, .1)'
                    }, {
                        from: 71,
                        to: 140,
                        color: 'rgba(23, 23, 23, .2)'
                    }, {
                        from: 141,
                        to: 210,
                        color: 'rgba(23, 23, 23, .3)'
                    }, {
                        from: 211,
                        to: 280,
                        color: 'rgba(23, 23, 23, .4)'
                    }, {
                        from: 281,
                        to: 350,
                        color: 'rgba(23, 23, 23, .5)'
                    }, {
                        from: 351,
                        to: 420,
                        color: 'rgba(23, 23, 23, .6)'
                    }, {
                        from: 421,
                        to: 490,
                        color: 'rgba(23, 23, 23, .7)'
                    }, {
                        from: 491,
                        to: 560,
                        color: 'rgba(23, 23, 23, .8)'
                    }, {
                        from: 561,
                        to: 630,
                        color: 'rgba(23, 23, 23, .9)'
                    }, {
                        from: 631,
                        to: 700,
                        color: 'rgba(23, 23, 23, 1)'
                    }]