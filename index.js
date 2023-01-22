import * as danfo from "danfojs-node";

const melbournFilePath = "./melb_data.csv";

/**
 *
 * @param {danfo.DataFrame} dataFrame
 */
function processDataFrame(dataFrame) {
  const nonNullDataFrame = dataFrame.dropNa({ axis: 0 }); // Remove missing values
  /**
   * By convention, the prediction target is called `y`
   */
  const y = nonNullDataFrame.column("Price");

  /**
   * Features are the columns we wanna give to the model to make
   * a prediction. Generally all columns except the target will be
   * user to make a prediction. By convention, the data from these
   * columns is called `X`
   */
  const features = ["Rooms", "Bathroom", "Landsize", "Lattitude", "Longtitude"];
  const X = nonNullDataFrame.loc({ columns: features });
  X.describe().print();
  X.head().print();
}

danfo.readCSV(melbournFilePath).then(processDataFrame);
