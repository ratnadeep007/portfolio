<template>
  <div>
    <div class="container mx-auto mt-6">
      <div class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between">
        <div class="w-1/2">
          <div class="flex flex-row sm:justify-center">
            <img class="h-40" src="../assets/svg/database.svg" />
          </div>
        </div>
        <div class="sm:w-1/2">
          <div class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify">
            Be is SQL or NoSQL or cache or any other acquainted working with all of them.
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center text-lg sm:text-2xl text-gray-900 font-bold mt-3">
        Technologies
      </div>
      <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-3">
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full w-1/2 p-2 ml-12">
                <img src="../assets/svg/mysql.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">MySQL <span class="italic text-gray-600 text-sm ml-3 font-thin">by Oracle Corporation</span></div>
              <div class="text-lg text-gray-700 text-justify">
                One of the most widely used SQL RDBMS. Started my SQL journey with MySQL. Used it my personal projects
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/postgres.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Postgres <span class="italic text-gray-600 text-sm ml-3 font-thin">by PostgreSQL Global Development Group</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Another widely used SQL RDBMS which I currently work on. When I know that schema is not going to change frequently I go for PostgreSQL.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/elastic.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">ElasticSearch <span class="italic text-gray-600 text-sm ml-3 font-thin">by Elastic NV</span></div>
              <div class="text-lg text-gray-700 text-justify">
                My preferred search engine when I need to implement real-time search. Also can be used with ELK stack for log search and many other implementations.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/neo4j.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Neo4j <span class="italic text-gray-600 text-sm ml-3 font-thin">by Neo4j</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Whenever I need to find realtions between data points I go for Neo4j Graph Database
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/mongo.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">MongoDB <span class="italic text-gray-600 text-sm ml-3 font-thin">by MongoDB Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Widely used NO-SQL document oriented database where I need to work upon a schema which will change frequently in upcoming I go for MongoDB specially due to availibility of mLabs, MongoAtlas and easy and fast to setup.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/redis.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Redis <span class="italic text-gray-600 text-sm ml-3 font-thin">by Redis Labs</span></div>
              <div class="text-lg text-gray-700 text-justify">
                In-memory key-value database. When I need caching database Redis is my go to solution for that. Easy setup using any backend and easy to learn new things.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full w-1/2 p-2 ml-12">
                <img src="../assets/svg/rethinkdb.svg" class="fill-current text-white" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">RethinkDB <span class="italic text-gray-600 text-sm ml-3 font-thin">by RethinkDB</span></div>
              <div class="text-lg text-gray-700 text-justify">
                My most preferred option for implementing real-time database also a reason to choose is that it's open-source
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/influx.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">InfluxDB <span class="italic text-gray-600 text-sm ml-3 font-thin">by InfluxData</span></div>
              <div class="text-lg text-gray-700 text-justify">
                When working with data like CPU utilisation, Sensors etc I go time-series database in which InfluxDB is my preferred one.
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <!-- <SkillsCard class="mt-3" /> -->
    </div>
    <!-- <Footer /> -->
</template>

<script>
export default {
  name: 'Databases'
}
</script>
