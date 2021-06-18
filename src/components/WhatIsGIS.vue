<template>
    <div class="m-auto">
        <div class="pt-14 pb-10 text-4xl font-bold">
            <h1>What is geographic information services (GIS)?</h1>
        </div>
        <div class="grid md:grid-cols-5 w-8/12 m-auto">
             <div class="h-72 opacity-80">
                <img src="../assets//WhatIsGIS.png" alt="WhatIsGIS Image">
            </div>
            <div class="h-72 md:col-span-4 text-left pl-5">
                 <span class="font-bold text-xl">GIS (Global Information System)</span> is a collection of computer hardware, software, and geographic data for capturing, managing, analyzing and displaying all forms of geographically referenced information (Source: ESRI).

GIS allows for the comparison of geographic data and information associated with those geographic areas. Questions like, “How many school-aged children are within 1,000 feet of a proposed elementary school?” Can be answered with GIS.

GIS maintains data in “layers.” Each layer represents a certain type of feature: lines, points, and polygons. Features have associated information. For instance, a road is a line feature that has information such as its name. Within each layer, rules can be created in order to maintain specific characteristics and standardizations. For example, features within the land parcels layer should not overlap each other. Requiring this type of characteristic prevents technicians from overlapping lots on top of each other. The collection of layers is housed in a spatial database. Relationships between layers can be made at this level, providing even more detailed models which better depict real life.
To find out more about <a href="https://www.esri.com/en-us/what-is-gis/overview" target="_blank" style="color: blue">Visit GIS.com.</a>
            </div>
        </div>
    </div>
</template>


<script>

export default {
  data() {
    return {

    }
  }
};




</script>
