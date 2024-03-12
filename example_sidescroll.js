function draw_one_frame(cur_frac) {
  let sun_size = height / 8;

  colorMode(RGB)
  noStroke();
  // sky
  fill("#DDE5B6");
  rect(0, 0, width, height);

  // // sun
  // fill(255, 255, 0);
  // ellipse(0.25 * width, 0.10 * height, sun_size);

  // grass
  fill(0, 0, 0);
  rect(0, height / 1.92, width, height / 2);

  stroke(0);
  fill(100, 100, 100);

  let b1_y = 1 / 10 * height;
  let b2_y = 1 * height;

  let b1_size = height / 150;
  let b2_size = height / 5.1;

  let silk_space = height / 150
  let b1_fac = height / 60



  let color_1 = color("#F0EAD2")
  let color_2 = color("#DDE5B6")
  let color_3 = color("#ADC178")
  let color_4 = color("#A98467")
  let color_5 = color("#6C584c")
  let color_6 = color("#6C584c")

  let color_7 = color("#A98467")
  let color_8 = color("#ADC178")
  let color_9 = color("#DDE5B6")
  let color_10 = color("#DDE5B6")

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
    color_10,
    color_3,
    color_4,
    color_5,
    color_6,
    color_7,
    color_6,
    color_9,
    color_10,

    color_1,
    color_6,
    color_3,
    color_4,
    color_5,
    color_6,
    color_10,
    color_8,
    color_9,
    color_10,

  ]

  let grid_points1 = [
    -0.8 * width,
    -0.6 * width,
    -0.4 * width,
    -0.2 * width,
    -0 * width,
    0.2 * width,
    0.4 * width,
    0.6 * width,
    0.8 * width,
    1 * width,
    1.2 * width,
    1.4 * width,
    1.6 * width,
    1.8 * width,
    2.0 * width,

    2.2 * width,
    2.4 * width,
    2.6 * width,
    2.8 * width,
    3.0 * width,

    3.2 * width,
    3.4 * width,
    3.6 * width,
    3.8 * width,
    4.0 * width,

    4.2 * width,
    4.4 * width,
    4.6 * width,
    4.8 * width,
    5.0 * width,





  ]

  if (debugView) {
    stroke(250, 0, 0);

    strokeWeight(height / 100);
    noFill();
    for (let i = 0; i < arrayOfColours.length - 1; i++) {
      cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], width * 2)
      cur_x_pos_reverse = map(cur_frac, 1, 0, grid_points1[i], width * 2)
      rect(cur_x_pos - i * width / 10, b1_y, b1_size * b1_fac, b1_size);
      rect(cur_x_pos_reverse - i * width / 10, b1_y, b1_size * b1_fac, b1_size);
      rect(cur_x_pos - i * width / 10 - width / 20, b1_y - silk_space, b1_size * b1_fac, b1_size);
      rect(cur_x_pos_reverse - i * width / 10 - width / 20, b1_y - silk_space, b1_size * b1_fac, b1_size);

    }
  }



  noStroke()
  for (let ii = 0; ii < 6; ii++) {
    for (let i = 0; i < arrayOfColours.length - 1; i++) {
      fill(arrayOfColours[i])
      let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i] - width / 4, width * 2)
      cur_x_pos_reverse = map(cur_frac, 1, 0, grid_points1[i] - width / 4, width * 2)


      rect(cur_x_pos - i * width / 10, b1_y * ii, b1_size * b1_fac, b1_size);
      rect(cur_x_pos_reverse - i * width / 10, b1_y * ii, b1_size * b1_fac, b1_size);

      rect(cur_x_pos - i * width / 10 - width / 20, b1_y * ii - silk_space, b1_size * b1_fac, b1_size);
      rect(cur_x_pos_reverse - i * width / 10 - width / 20, b1_y * ii - silk_space, b1_size * b1_fac, b1_size);

      rect(cur_x_pos - i * width / 10 - width / 20, b1_y * ii + silk_space, b1_size * b1_fac, b1_size);
      rect(cur_x_pos_reverse - i * width / 10 - width / 20, b1_y * ii + silk_space, b1_size * b1_fac, b1_size);

      rect(cur_x_pos - i * width / 10 + width / 20, b1_y * ii + silk_space * 2, b1_size * b1_fac, b1_size);
      rect(cur_x_pos_reverse - i * width / 10 + width / 20, b1_y * ii + silk_space * 2, b1_size * b1_fac, b1_size);

      rect(cur_x_pos - i * width / 10 + width / 20, b1_y * ii - silk_space * 2, b1_size * b1_fac, b1_size);
      rect(cur_x_pos_reverse - i * width / 10 + width / 20, b1_y * ii - silk_space * 2, b1_size * b1_fac, b1_size);



    }
  }

let b1_fac_2 = height/40

  noStroke()
  for (let ii = 0; ii < 6; ii++) {
    for (let i = 0; i < arrayOfColours.length - 1; i++) {
      fill(arrayOfColours[i])
      let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i] - width, width * 2)
      cur_x_pos_reverse = map(cur_frac, 1, 0, grid_points1[i] - width, width * 2)


      rect(cur_x_pos - i * width / 20, b1_y * ii, b1_size * b1_fac_2, b1_size);
      rect(cur_x_pos_reverse - i * width / 20, b1_y * ii- width / 30, b1_size * b1_fac_2, b1_size);

      


    }
  }







  let grid_pointX = [
    -0.8 * width,
    -0.6 * width,
    -0.4 * width,
    -0.2 * width,
    -0 * width,
    0.2 * width,
    0.4 * width,
    0.6 * width,
    0.8 * width,
    1 * width,
    1.2 * width,
    1.4 * width,
    1.6 * width,
    1.8 * width,
    2.0 * width
  ]


  let low_piontY = 0
  let high_pointY = 0.03

  let grid_pointY = [
    low_piontY * height,
    high_pointY * height,
    low_piontY * height,
    high_pointY * height,
    low_piontY * height,
    high_pointY * height,
    low_piontY * height,
    high_pointY * height,
    low_piontY * height,
    high_pointY * height,
    low_piontY * height,
    high_pointY * height






  ]






  if (debugView) {
    stroke(250, 50, 0);
    strokeWeight(height / 50);
    noFill();
    for (let i = 0; i < grid_points1.length; i++) {
      rect(grid_points1[i], b2_y, b2_size, 2 * b2_size);
    }
  }

  fill(100, 100, 0);
  noStroke();
  for (let i = 0; i < grid_pointX.length - 1; i++) {
    let cur_x_pos = map(cur_frac, 0, 1, grid_pointX[i], grid_pointX[i + 1]);
    let cur_y_pos = map(cur_frac, 0, 1, grid_pointY[i], grid_pointY[i + 1])
    rect(cur_x_pos, cur_y_pos + height / 1.5, b2_size, 2 * b2_size);
  }

  function silk_1(silkColor) {

    fill(silkColor)
    rect(0, 0, width * 0.04, height * 0.04)

    fill(color_2)
    rect(width * 0.04, 0, width * 0.04, height * 0.04)

    fill(color_3)
    rect(width * 0.04, 0, width * 0.04, height * 0.04)


  }
}