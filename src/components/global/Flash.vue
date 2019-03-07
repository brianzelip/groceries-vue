<template>
  <section>
    <h1>⚡</h1>
    <!--if locals.flashes && Object.keys(locals.flashes).length > 0
        section
          .container
            //- pre= h.dump(locals.flashes)
            - const categories = Object.keys(locals.flashes)
            each category in categories
              each message in flashes[category]
                section(class=`flex flex-center flash flash--${category} mb3`)
                  h1.m0.h4.regular.flex-grow!= message
                  a.btn.h3.p0.cursor(onClick="this.parentElement.remove()") &times;-->
  </section>
</template>
