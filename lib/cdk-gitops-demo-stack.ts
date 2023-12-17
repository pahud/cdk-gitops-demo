import {
  Stack, StackProps,
  aws_lambda as lambda,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';


export class CdkGitopsDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'Func', {
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      handler: 'index.handler',
    });


  }
}
