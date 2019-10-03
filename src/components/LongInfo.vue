<template>
  <div class="container mx-auto my-6">
    <div class="flex flex-row justify-center">
      <div class="font-bold text-2xl text-gray-800 italic">Skills</div>
    </div>
    <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-3">
      <div class="w-1/2 mr-3">
        <div class="flex flex-col justify-center items-center w-full">
          <div class="font-bold text-2xl text-gray-800 mb-2">Frontend</div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/angular.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Angular 2+ <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              Working in Angular since it's beta release. When creating complex frontend whose requirements are well defined then I go for Angular due to it's Typscript support and less dependent on third party modules for core features like routing and HTTP request. 
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/react.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">React <span class="italic text-gray-600 text-sm ml-3 font-thin">by Facebook Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              After starting journey with Angular I started looking for other options in this frontend framework and found out React Library to be interesting and started learning and building projects in it. When I need somehting to be built fast and light weight with flexilinity to choose my own libraries I go with React. 
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/vue.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Vue <span class="italic text-gray-600 text-sm ml-3 font-thin">by Evan You</span></div>
            <div class="text-lg text-gray-700 text-justify">
              With same time as react I came to know about Vue with somewhere introducing it as best of both worlds from Angular and React. I really like Vue with it's concept of single page components without JSX. 
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/svelte.png" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Svelte <span class="italic text-gray-600 text-sm ml-3 font-thin">by Rich Harris</span></div>
            <div class="text-lg text-gray-700 text-justify">
              I like to experiment with new technologies so when I came to know about this web framework I couldn't hold myself and started working on this. It's tagline caught my eye specially which is <span class="italic">"Cybernetically enhanced web apps"</span>. I currently learing it. 
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3  ml-12">
              <img src="../assets/svg/stencil.png" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Stencil <span class="italic text-gray-600 text-sm ml-3 font-thin">by Ionic Team</span></div>
            <div class="text-lg text-gray-700 text-justify">
              A web component compiler by Ionic Team. Easy building reusable componens mainly learned it as it's used in Ionic Framework for building apps. 
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/litelement.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">LitElement <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              I was introduced to Web Components with Polymer project from Google but I thought I web components are made to work with normal HTML then it can work with any framework so took LitElement a sub-project of Polymer which is a compiler for web components. 
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center w-full">
          <div class="font-bold text-2xl text-gray-800 mb-2">Machine Learning</div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/scikit.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Scikit Learn <span class="italic text-gray-600 text-sm ml-3 font-thin">by David Cournapeau</span></div>
            <div class="text-lg text-gray-700 text-justify">
              This where I started working on data science and machine learning specially supervised machine learning. Building small projects like cost of building etc.  
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/tensorflow.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Tensorflow <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              My go to framework for deep learning stuff. Specially now it provides Keras in Tensorflow 2.0 and also it's easy to deploy and use with current development in V8 engine in used in Node tensorflow models can be directly used in browsers using Tensorflow.js and also in mobile using Tensorflow Lite. 
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/pytorch.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">PyTorch <span class="italic text-gray-600 text-sm ml-3 font-thin">by Facebook Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              PyTorch is a python implementation of C's torch library. Currently learning PyTorch. Like it's manipulation of graph on the go.
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center w-full">
          <div class="font-bold text-2xl text-gray-800 mb-2">Mobile Apps</div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/android.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Android SDK <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              Started developing mobile apps with Android SDK using eclipse ADT plugin. Now fields has changed so many cross-platform solutions are out there but SDK is best when you need best out of everydevice out there on small size. Waiting for Jetpack compose to be production ready.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/ionic.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Ionic <span class="italic text-gray-600 text-sm ml-3 font-thin">by Drifty</span></div>
            <div class="text-lg text-gray-700 text-justify">
              My first encounter with cross-platform mobile app development solution. It's easy to port already availible apps from web to mobile. I use it when I need to build apps very fast not cosidering performance.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/nativ-react.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">React Native <span class="italic text-gray-600 text-sm ml-3 font-thin">by Facebook Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              One the best solution out there for building native apps. I use it when I already have a React.js webapp and it needs to be ported to mobile. Also I like to use to in team project as React Native developers are easier to find than others.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/nativescript.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Nativescript <span class="italic text-gray-600 text-sm ml-3 font-thin">by Progress Software Corporation</span></div>
            <div class="text-lg text-gray-700 text-justify">
              Similar to React Native when I need to support Angular or Vue app to mobile to opt for this option also it provides many more pre-built components when compared to React Native.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/flutter.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Flutter <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              New kid in the block but most performant among others due to it's native implementation in C++ and pixel perfect rendering but with caviate to learn new language which is dart. Currently learning Flutter to build a full fledged app.
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 ml-3">
        <div class="flex flex-col justify-center items-center">
          <div class="font-bold text-2xl text-gray-800">Backend</div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/node.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Node.js <span class="italic text-gray-600 text-sm ml-3 font-thin">by Ryan Dahl</span></div>
            <div class="text-lg text-gray-700 text-justify">
              With Angular started learning Javascript and building backend using it with <span class="font-bold">Express</span>. Then learned typescript and started using typescript with Express parallely working on <span class="font-bold">Koa</span> and <span class="font-bold">Hapi</span>. Recently moved to <span class="font-bold">Sails</span> as work hustle and <span class="font-bold">Nest.js</span> for it's typescript support and Angular like architecture.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/python.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Python <span class="italic text-gray-600 text-sm ml-3 font-thin">by Guido van Rossum</span></div>
            <div class="text-lg text-gray-700 text-justify">
              My first scripting and dynamic programming language. I worked on python for basically backend dev and moved to machine learning using python. <span class="font-bold">Django</span> is the first scripted backend I learned and continously uses it for different projects specially I like inbuilt admin panel. Also <span class="font-bold">Flask</span> I used for serving tensorflow models in my personal projects.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/java.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Java <span class="italic text-gray-600 text-sm ml-3 font-thin">by James Gosling</span></div>
            <div class="text-lg text-gray-700 text-justify">
              Java is second language I learned after C++. It's my first language running on a VM. I worked on <span class="font-bold">Spring</span> and <span class="font-bold">Spring Boot</span> for web development. Currently I like working on GraalVM wtih <span class="font-bold">Vert.x</span> framework for Java and Kotlin.
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="font-bold text-2xl text-gray-800">Other Platform</div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/c.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">C <span class="italic text-gray-600 text-sm ml-3 font-thin">by Dennis Ritchie</span></div>
            <div class="text-lg text-gray-700 text-justify">
              C is first high level language written for Unics. I love working in this when I need performance from system. I prefer working in C++ more than C due to OOPs concepts are applicable and I get real classes in C++ unlike structs and unions in C.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/cpp.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">C++ <span class="italic text-gray-600 text-sm ml-3 font-thin">by Bjarne Stroustrup</span></div>
            <div class="text-lg text-gray-700 text-justify">
              I first programming language and still my favourite programming language. Whenever I need performance I head over to my this friend. Places I use C++ are like building game engines, handling image like compression or building high performance deskop applications (<span class="font-bold">Qt</span>) for internal uses.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-600 w-1/2 p-2 ml-12">
              <img src="../assets/svg/elixir.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Elixir <span class="italic text-gray-600 text-sm ml-3 font-thin">by José Valim</span></div>
            <div class="text-lg text-gray-700 text-justify">
              I first experience with Functional programming language is with Elixir which runs on Erlang's BEAN VM. I like to build backend with Elixir with <span class="font-bold"> Pheonix framework</span>. I don't use it much.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-600 w-1/2 p-2 ml-12">
              <img src="../assets/svg/haskell.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Haskell <span class="italic text-gray-600 text-sm ml-3 font-thin">by Multiple People</span></div>
            <div class="text-lg text-gray-700 text-justify">
              Whenever I need to learn new things about functional programming I head over to haskell. I likes it's strict compiler and hence no runtime errors. I am currently learning Haskell and building backend with it.
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="font-bold text-2xl text-gray-800">Miscellaneous</div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/electron.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Electron.js <span class="italic text-gray-600 text-sm ml-3 font-thin">by Github, Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              Easiest and fastest way for creating a desktop application using already knows web technologies. I use to create desktop apps fast if I already have a web app mostly the case.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/firebase.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Firebase <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              A BaaS I use when I need to create something fast be it web app or mobile app, even if I am not using backend of Firebase I might some of it's features like Hosting, Cloud Messaging, Cloud Functions, Cloud Storage. A ready to go backend for me.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/docker.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Docker <span class="italic text-gray-600 text-sm ml-3 font-thin">by Docker, Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              I like working with containers. If it runs on my machine it will have to run on any cloud. I consider is as version control for file systems and with support to deploy in Heroku, GCP or AWS I use it a lot.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/heroku.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Heroku <span class="italic text-gray-600 text-sm ml-3 font-thin">by Salesforce.com, Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              Fastest deployment with Git. I like mainly there buildpacks specially with Node applications. They autmatically run install dependencies, building and serving just we need to make package.json file as per there specs.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/gcp.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Google Cloud Platform <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              Google Cloud Platform I mainly lean towards it cause of it's kubernetes engine a orchestration platform for Docker. Also most of the app uses maps now a days which is also a part of GCP and the provide easy intergration with Machine Learning. 
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-1/4">
            <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
              <img src="../assets/svg/aws.svg" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Amazon Web Services <span class="italic text-gray-600 text-sm ml-3 font-thin">by Amazon.com, Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              I think no need to tell why I use it. Everybody is using it specially I use there VMs for machine learning that is training models with GPUs.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-center">
      <div class="font-bold text-2xl text-gray-800 italic">Other Upcoming Technologies Following Closely</div>
    </div>
    <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-3">
      <div class="w-1/2 mr-3">
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">WebAssembly </div>
            <div class="text-lg text-gray-700 text-justify">
              As performance freak and love for C and C++ I am looking closely to the development of WebAssembly which will allow other languages to run on browser which in turn can help in bring high performamnce softwares to web like game engine.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Deno <span class="italic text-gray-600 text-sm ml-3 font-thin">by Rayn Dahl</span></div>
            <div class="text-lg text-gray-700 text-justify">
              From creator Node.js a new project where her solves the problem of Node.js like heavy node_modules and using Typescript as a programming language.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">CSS Houdini</div>
            <div class="text-lg text-gray-700 text-justify">
              Houdini CSS is a new collection of browser APIs which allow you to gain more access to your browser’s CSS engine. The APIs are accessible through JavaScript, making them web developer friendly.
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 mr-3">
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Serverless </div>
            <div class="text-lg text-gray-700 text-justify">
              Running small functions on web without taking headache of maintaing whole server. Just write a function which does a job perfect deploy it, cloud service provider will take care of it.
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Vue Native <span class="italic text-gray-600 text-sm ml-3 font-thin">by GeekyAnts</span></div>
            <div class="text-lg text-gray-700 text-justify">
              A project by GeekyAnts which is based on React Native which will allow to Vue in similar way as React in Mobile apps.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LongInfo'
}
</script>
