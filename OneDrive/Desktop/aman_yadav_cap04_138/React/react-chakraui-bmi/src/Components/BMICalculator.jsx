
import React, { useState } from 'react';
import {Button,SimpleGrid,Center,Grid,Box,Stack,Text,Heading} from '@chakra-ui/react';
function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = Number(height) / 100;
    const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
    let bmiStatus, textColor;

    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
      textColor = 'blue';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      bmiStatus = 'Healthy';
      textColor = 'green';
    } else {
      bmiStatus = 'Overweight';
      textColor = 'red';
    }

    setBmiResult({ value: bmiValue.toFixed(2), status: bmiStatus, color: textColor });
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmiResult(null);
  };
  return <Box>

<Center>
        <Heading as="h1" mb={8}>
          BMI Calculator
        </Heading>
      </Center>
      <SimpleGrid columns={2} className="bmi-form">
        <input
          type="number"
          placeholder="Enter Weight(kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="weight"
        />
        <input
          type="number"
          placeholder="Enter Height(cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="height"
        />
      </SimpleGrid>
      <Center mt={4}>
        <Stack direction="row" spacing={4}>
          <Button colorScheme="blue" onClick={calculateBMI}>
            Calculate
          </Button>
          <Button colorScheme="gray" onClick={resetForm}>
            Reset
          </Button>
        </Stack>
      </Center>
      {bmiResult && (
        <Grid mt={7} className="bmi-result">
          <Box textAlign="center">
            <Text fontSize="xl">BMI Value: {bmiResult.value}</Text>
            <Text fontSize="xl" color={bmiResult.color}>
              BMI Status: {bmiResult.status}
            </Text>
          </Box>
        </Grid>
      )}
  </Box>;
}

export default BMICalculator;
