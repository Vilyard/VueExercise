<template>
  <div class="grid gap-3">
    <div class="col-span-2"><MainSection /></div>
    <div class="row-start-2 justify-center p-10 w-full">
      <Card
        title="About us"
        subtitle="Pharetra massa massa ultri."
        :labels="[
          'Ornare quam viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel fringilla est. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.',
        ]"
        arrowText="Read our story"
        arrowPosition="right"
        textColor="text-red-500"
        bgColor="bg-blue-500"
      />
    </div>
    <div class="row-start-2 justify-center p-10 w-full">
      <Card
        title="Our offer"
        subtitle="Convallis a cras semper au."
        :labels="[
          'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel fringilla est. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.',
        ]"
        arrowText="What we offer"
        arrowPosition="right"
        textColor="text-red-500"
        bgColor="bg-blue-500"
      />
    </div>
    <div class="col-span-2"><SecondSection /></div>
    <div class="row-start-4 p-10 w-full"><ThirdSection /></div>
    <div class="row-start-4 p-10 w-full">
      <Card
        title="Join our team"
        subtitle="Tincidunt tortor aliquam."
        :labels="[
          'Quam nulla porttior massa id neque aliquam. Quam elementum pulvinar etiam non quam l acus suspendisse faucibus interdum. Nunc lobortis mattis aliquam faucibus purus in. Facilisis volutpat est velit egestas dui id. Mollis aliquam ut porttior leo a diam solicitudin tempor',
          'Netus et malesuda fames ac. Metus vulputate eu scelerisque felis imperdiet prion fermentum leo vel. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Dictum sit amet justo donec enim diam vulputate. Condimentum id venenatis a condimentum vitae',
          'Urna neque viverra justo nec ultrices dui sapien. Faucibus nisi tincidunt eget nullam. Maecenas ultricies mi eget mauris pharetra.',
        ]"
        arrowText="We’re hiring"
        arrowPosition="right"
        textColor="text-red-500"
        bgColor="bg-blue-500"
      />
    </div>

    <div class="col-span-2 justify-self-center self-center pb-10">
      <CustomForm />
    </div>
  </div>
  <CustomFooter />
</template>
