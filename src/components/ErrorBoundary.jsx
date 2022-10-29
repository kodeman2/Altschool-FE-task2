import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ErrorBoundary extends Component {
 constructor(props) {
   super(props);
   this.state = { hasError: false };
 }

 static getDerivedStateFromError(error) {
   return { hasError: true };
 }

 componentDidCatch(error, errorInfo) {
   // You can also log the error to an error reporting service
   console.log(error, errorInfo);
 }

 render() {
   if (this.state.hasError) {
     // You can render any custom fallback UI
     return <h1 style={{color:"red", margin:"50px"}}>Something went wrong  .....</h1>;
   }

   return this.props.children; 
 }
}