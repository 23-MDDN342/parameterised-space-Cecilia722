function draw_one_frame(cur_frac) {
  let sun_size = height/8;
  
  colorMode(RGB)
  noStroke();
  // sky
  fill("#DDE5B6");
  rect(0, 0, width, height);

  // sun
  fill(255, 255, 0);
  ellipse(0.25 * width, 0.10 * height, sun_size);

  // grass
  fill("#DDE5B6");
  rect(0, height/2, width, height/2);

  stroke(0);
  fill(100, 100, 100);

  let b1_y = 0.55 * height;
  let b2_y = 0.65 * height;

  let b1_size = height/100;
  let b2_size = height/6;



  let color_1 =color("#F0EAD2")
  let color_2 =color("#DDE5B6")
  let color_3 =color("#ADC178")
  let color_4 =color("#A98467")
  let color_5 =color("#6C584c")
  let color_6 =color("#6C584c")

  let color_7 =color("#A98467")
  let color_8 =color("#ADC178")
  let color_9 =color("#DDE5B6")
  let color_10 =color("#DDE5B6")

  let arrayOfColours = [
    color_1,
    color_2,
    color_3,
    color_4,
    color_5,
    color_6,
    color_7,
    color_8,
    color_9,
    color_10,

    color_1,
    color_2,
    color_3,
    color_4,
    color_5,
    color_6,
    color_7,
    color_8,
    color_9,
    color_10,

    color_1,
    color_2,
    color_3,
    color_4,
    color_5,
    color_6,
    color_7,
    color_8,
    color_9,
    color_10,

    
  ]
 
  let grid_points1 = [
    - 0.8* width,
    -0.6 * width,
     -0.4 * width,
     -0.2 * width,
     -0* width,
     0.2 * width,
     0.4 * width,
     0.6* width,
     0.8 * width,
    1* width,
    1.2* width,
    1.4* width,
    1.6* width,
   ]

  if (debugView) {
    stroke(250, 0, 0);
 
    strokeWeight(height/100);
    noFill();
    for(let i=0; i<grid_points1.length; i++) {
      rect(grid_points1[i], b1_y, b1_size, 3*b1_size);
    }    
  }

  

  fill(color_1);
  noStroke()


  for(let i=0; i<arrayOfColours.length-1; i++) {
    fill(arrayOfColours[i])
    let cur_x_pos = map(cur_frac, 0, 1,grid_points1[i], width*2)
    rect(cur_x_pos - i*width/10, b1_y,20*b1_size, 1*b1_size);

  
  }

   
  // let grid_points3= [
  //   - 0.8* width,
  //   -0.6 * width,
  //    -0.4 * width,
  //    -0.2 * width,
  //    -0* width,
  //    0.2 * width,
  //    0.4 * width,
  //    0.6* width,
  //    0.8 * width,
  //   1* width,
  //   1.2* width,
  //   1.4* width,
  //   1.6* width,
  //  ]

  // if (debugView) {
  //   stroke(250, 0, 0);
 
  //   strokeWeight(height/100);
  //   noFill();
  //   for(let i=0; i<grid_points3.length; i++) {
  //     rect(grid_points3[i], b1_y, b1_size, 3*b1_size);
  //   }    
  // }

  

  // fill(color_1);
  // noStroke()


  // for(let i=0; i<arrayOfColours.length-1; i++) {
  //   fill(arrayOfColours[i])
  //   let cur_x_pos = map(cur_frac, 0, 1,grid_points3[i], width*2)
  //   rect(cur_x_pos - i*width/10, b1_y,20*b1_size, 1*b1_size);

  








  let grid_points2 = [
   -0.40 * width,
    0.10 * width,
    0.60 * width,
    1.10 * width
  ]


  if(debugView) {
    stroke(250, 50, 0);
    strokeWeight(height/50);
    noFill();
    for(let i=0; i<grid_points1.length; i++) {
      rect(grid_points1[i], b2_y, b2_size, 2*b2_size);
    }    
  }

  fill(100, 100, 0);
  noStroke();
  for(let i=0; i<grid_points1.length-1; i++) {
    let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], grid_points1[i+1])
    rect(cur_x_pos, b2_y, b2_size, 2*b2_size);
  }

  function silk_1(silkColor){

    fill(silkColor)
    rect (0,0,width*0.04, height*0.04)
  
    fill(color_2)
    rect (width*0.04,0,width*0.04, height*0.04)
  
    fill(color_3)
    rect (width*0.04,0,width*0.04, height*0.04)
  
  
   }
}

